import { MainArea } from "./main-area";
import { AiGenerate } from "@/icons";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/ui";
import { SettingsPanel } from "./settings-panel";

export const CreateCvModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="lg with-icon accent-1">
        <AiGenerate /> Create resume
      </DialogTrigger>
      <DialogContent asChild>
        <form className="grid grid-cols-[230px,1fr]">
          <DialogTitle className="sr-only">Generate a new resume</DialogTitle>
          <DialogDescription className="sr-only">
            Here you can generate a new resume
          </DialogDescription>
          <SettingsPanel />
          <MainArea />
        </form>
      </DialogContent>
    </Dialog>
  );
};
