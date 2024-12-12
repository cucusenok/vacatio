"use client";

/*
import { usePathname } from "next/navigation";
*/
import { cn } from "@/helpers/object.helpers";
import { Link, type LinkProps } from "./ui";

export type NavigationLinkProps = LinkProps & {
  activeIfContains?: string;
};

export const NavigationLink = (props: NavigationLinkProps) => {
  const { href, children, className, activeIfContains, ...rest } = props;
  //const pathname = usePathname();
  //const isActive = pathname === href || (activeIfContains && pathname.includes(activeIfContains));

  return (
    <Link
      href={href}
      className={cn(
        "lg interactive with-icon common hover:text-accent-500",
        {
          "font-semibold text-accent-500": true,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
