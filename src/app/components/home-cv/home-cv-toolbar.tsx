import { UploadCvModal } from "@/app/components/modals/upload-cv";
import { TooltipProvider } from "@/ui";

export const HomeCvToolbar = () => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-2 pt-2">
        <TooltipProvider>
          <UploadCvModal />
        </TooltipProvider>
      </div>
    </div>
  );
};
