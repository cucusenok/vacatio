"use client";

import Link from "@/app/components/icons/cv/Link";
import { privateRoutes } from "@/constants/routes.constants";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { Copy, Popover, PopoverContent, PopoverTrigger } from "@/ui";

export const ShareCvButton = () => {
  const { publicKey, id, companyName } = useDataContext((state) => ({
    publicKey: state.cv?.publicKey,
    id: state.cv?.id,
    companyName: state.vacancy?.companyName,
  }));

  if (!publicKey || !id || !companyName) return null;

  const url = `${window.location.origin}${privateRoutes.editor(id, companyName, publicKey)}`;

  return (
    <Popover>
      <PopoverTrigger className="primary sm appear-animation">Share</PopoverTrigger>
      <PopoverContent className="whitespace-nowrap p-2" sideOffset={10} align="end">
        <Copy value={url} className="flex-y gap-1">
          <span className="flex-y gap-1 text-sm text-accent-200">
            Copy public link <Link />
          </span>
          <small className="w-[100px] truncate">{url}</small>
        </Copy>
      </PopoverContent>
    </Popover>
  );
};
