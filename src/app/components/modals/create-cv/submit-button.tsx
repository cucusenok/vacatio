"use client";

import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { IoSparkles } from "react-icons/io5";
import { closeModals } from "@/helpers/modal.helpers";
import { privateRoutes } from "@/constants/routes.constants";
import { VacancyFormFields } from "@/constants/vacancy.constants";
import { LogoLoader } from "@/ui";
import { createCv } from "./action";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  const router = useRouter();

  const action = (fd: FormData) => {
    closeModals();
    const originalDescription = fd.get(VacancyFormFields.originalDescription);
    if (typeof originalDescription !== "string") return;
    void createCv({ originalDescription });
    router.replace(privateRoutes.editor());
  };

  let Icon = <IoSparkles />;
  let text = "Create a tailored resume";

  if (pending) {
    Icon = <LogoLoader size="sm" />;
    text = "Count to five...";
  }

  return (
    <button type="submit" className="lg primary with-icon" formAction={action} disabled={pending}>
      {Icon}
      {text}
    </button>
  );
};
