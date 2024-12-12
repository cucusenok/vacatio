import cn from "classnames";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: React.ForwardedRef<HTMLTextAreaElement>;
};

const Textarea = ({ className, ref, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "border-input ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border bg-layer-1 px-3 py-2 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

export { Textarea };
