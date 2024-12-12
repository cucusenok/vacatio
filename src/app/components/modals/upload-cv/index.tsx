import { BsCloudUpload } from "react-icons/bs";
import { Dropzone } from "@/app/components/dropzone";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui";

export const UploadCvModal = () => {
  return (
    <Tooltip>
      <Dialog>
        <TooltipTrigger className="accent-2 md relative">
          <DialogTrigger asChild>
            <BsCloudUpload size={24} />
          </DialogTrigger>
        </TooltipTrigger>
        <DialogContent className="flex">
          <DialogTitle className="sr-only">Upload your CV</DialogTitle>
          <DialogDescription className="sr-only">
            Upload your CV to get started. You can always edit it later.
          </DialogDescription>
          <Dropzone />
        </DialogContent>
        <TooltipContent side="right" sideOffset={8}>
          Upload your CV
        </TooltipContent>
      </Dialog>
    </Tooltip>
  );
};
