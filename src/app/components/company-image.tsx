import { GiMountains } from "react-icons/gi";
import type { Vacancy } from "@/types/vacancy.types";

type Props = Partial<Vacancy> & {
  height?: number;
  width?: number;
};

export const CompanyImage = (props: Props) => {
  const { image, companyName, height = 20, width = 20 } = props;

  if (!image) return <GiMountains size={Math.max(+height, +width)} />;
  return <img src={image} alt={companyName ?? "Company logo"} height={height} width={width} />;
};
