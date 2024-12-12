import { cn } from "@/helpers/object.helpers";
import { LogoLoader } from "@/ui";

export const PickerLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex-center h-[180px]", className)}>
      <LogoLoader size="md" />
    </div>
  );
};
