import cn from "classnames";

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("badge", className)} {...props} />;
};
