import { type HTMLAttributes, type PropsWithChildren, type RefObject, forwardRef } from "react";

export type LinkProps = PropsWithChildren<
    {
      newTab?: boolean;
    } & HTMLAttributes<HTMLAnchorElement>
>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { newTab, children, className, ...rest } = props;

  const shouldNewTab = newTab ? { target: "_blank", rel: "noreferrer" } : {};

  return (
      <a className={className} ref={ref} {...rest} {...shouldNewTab}>
        {children}
      </a>
  );
});

Link.displayName = "Link";

export { Link };
