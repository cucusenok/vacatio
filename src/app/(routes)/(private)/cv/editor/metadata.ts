import type { Metadata } from "next";
import { COMPANY_NAME_PARAM, NO_VALUE } from "@/constants/url-params.constants";

type Props = {
  searchParams: {
    [COMPANY_NAME_PARAM]: string | string[] | undefined;
  };
};

export const generateMetadata = async ({ searchParams }: Props): Promise<Metadata> => {
  const param = searchParams[COMPANY_NAME_PARAM];
  const companyName = param === NO_VALUE ? null : param;

  const title = companyName ? `CV for ${companyName as string} — Vocatio` : "CV Editor — Vocatio";

  return {
    title,
    description: "Optimize your CV with Vocatio",
  };
};
