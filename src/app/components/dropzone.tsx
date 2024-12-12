"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftword } from "react-icons/si";
import { updateUserWithCvUpload } from "./modals/upload-cv/action";
import { images } from "@/constants/images.constants";
import { Badge, FullscreenLoader } from "@/ui";

export const Dropzone = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  if (uploadedFile) return <FullscreenLoader />;

  const updateUser = async (file: unknown) => {
    if (file instanceof File) {
      setUploadedFile(file);
      await updateUserWithCvUpload({ file });
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    await updateUser(file);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    await updateUser(file);
  };

  return (
    <label
      htmlFor="resume-upload"
      className="flex-center grow cursor-alias flex-col border-2 border-dashed text-center text-headline"
      onDragOver={onDragOver}
      onDrop={onDrop}
      role="region"
      aria-label="Drop zone for resume upload"
    >
      <Image
        src={images.illustrations.archiveFiles}
        alt="Upload your resume"
        height={200}
        width={200}
        draggable={false}
      />
      Upload your existing resume
      <footer className="flex-y gap-2 py-4">
        <Badge className="danger with-icon md">
          <ImFilePdf />
          PDF
        </Badge>
        <Badge className="accent-1 with-icon md">
          <SiMicrosoftword />
          DOCX
        </Badge>
      </footer>
      <input
        ref={inputRef}
        type="file"
        id="resume-upload"
        accept=".pdf"
        className="sr-only"
        onChange={onFileChange}
        aria-label="Upload resume PDF"
      />
    </label>
  );
};
