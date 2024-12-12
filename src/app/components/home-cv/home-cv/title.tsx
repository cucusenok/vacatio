import { cn } from "@/helpers/object.helpers";

type TitleProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Title = (props: TitleProps) => {
  const { children, className } = props;

  return (
    <h2 className={cn("border-b border-black pb-px text-md font-semibold uppercase", className)}>
      {children}
    </h2>
  );
};
