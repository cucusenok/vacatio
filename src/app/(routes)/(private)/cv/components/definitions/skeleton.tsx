import { cn } from "@/helpers/object.helpers";

export const DefinitionSkeleton = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      role="status"
      aria-label="Loading..."
      className={cn("my-1 animate-pulse rounded-md bg-[var(--gray-40)]", className)}
      {...props}
    />
  );
};
