import Image from "next/image";
import { images } from "@/constants/images.constants";
import { VOCATIO_CHROME_EXTENSION_URL } from "@/constants/routes.constants";
import {
  VACANCY_ORIGINAL_DESCRIPTION_MAX_LENGTH,
  VacancyFormFields,
} from "@/constants/vacancy.constants";
import { Link, Textarea } from "@/ui";
import { SubmitButton } from "./submit-button";

const CopyPasteArea = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-bold">Copy-paste your job description</h1>
      <Textarea
        autoFocus
        minLength={150}
        className="max-h-[310px] min-h-[180px]"
        name={VacancyFormFields.originalDescription}
        maxLength={VACANCY_ORIGINAL_DESCRIPTION_MAX_LENGTH}
        required
      />
      <SubmitButton />
    </section>
  );
};

const InstallExtensionArea = () => {
  return (
    <section className="flex gap-8">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-bold">Or ditch the copy-paste</h2>
          <span className="text-sm text-muted">
            Install our Chrome extension to directly generate your resume on the job platform
          </span>
        </div>
        <Link href={VOCATIO_CHROME_EXTENSION_URL} className="lg accent-3" newTab>
          Install
        </Link>
      </div>
      <Image
        src={images.illustrations.pointing}
        alt="Pointing"
        width={100}
        height={100}
        draggable={false}
      />
    </section>
  );
};

export const MainArea = () => {
  return (
    <div className="flex w-full flex-col gap-11 rounded-lg bg-layer-1 px-14 py-9 text-layer-1">
      <CopyPasteArea />
      <InstallExtensionArea />
    </div>
  );
};
