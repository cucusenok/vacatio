import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { type HTMLAttributes, type PropsWithChildren, type RefObject } from "react";

export type LinkProps = PropsWithChildren<
  {
    newTab?: boolean;
  } & NextLinkProps & { ref?: RefObject<HTMLAnchorElement> } & HTMLAttributes<HTMLAnchorElement>
>;

export const Link = (props: LinkProps) => {
  const { ref, newTab, children, className, ...rest } = props;

  const shouldNewTab = newTab ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <NextLink className={className} ref={ref} {...rest} {...shouldNewTab}>
      {children}
    </NextLink>
  );
};

Link.displayName = "Link";
