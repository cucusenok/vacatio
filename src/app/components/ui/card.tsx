import { cn } from "@/helpers/object.helpers";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <article
      className={cn(
        "cursor-pointer rounded-lg border bg-layer-1 p-4 transition hover:shadow-lg",
        className,
      )}
    >
      {children}
    </article>
  );
};
