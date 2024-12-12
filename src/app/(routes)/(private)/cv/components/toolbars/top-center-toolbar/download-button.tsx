"use client";

import { type RefObject } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { toast } from "sonner";
import { type CvWithRelations } from "@/types/cv.types";
import { stripHtmlTags } from "@/helpers/string.helpers";
import { A4_HEIGHT, A4_WIDTH, PAGE_BREAK_HEIGHT } from "@/constants/cv.constants";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { usePagination } from "@/cv/stores/use-pagination";

const formatForAts = (cv: CvWithRelations): string => {
  let formattedText = "";

  /**
   * Name, job title, professional summary
   */
  formattedText += `NAME: ${cv.name}\n`;
  if (cv.jobTitle) formattedText += `JOB TITLE: ${cv.jobTitle}\n`;
  formattedText += `PROFESSIONAL SUMMARY: ${cv.summary}\n`;

  /**
   * Contact
   */
  if (cv.contacts && cv.contacts.length > 0) {
    formattedText += `CONTACT:\n`;
    cv.contacts.forEach((entry) => {
      formattedText += `${entry.name}: ${entry.value}\n`;
    });
  }

  /**
   *  Education
   */
  if (cv.educations && cv.educations.length > 0) {
    formattedText += `EDUCATION:\n`;
    cv.educations.forEach((entry) => {
      formattedText += `- ${entry.title}, ${entry.place}\n  (${entry.period})\n`;
    });
  }

  /**
   * Employment History
   */
  if (cv.experiences && cv.experiences.length > 0) {
    formattedText += `\nEXPERIENCE:\n`;
    cv.experiences.forEach((entry) => {
      formattedText += `- ${entry.title} — ${entry.place}\n  (${entry.period})\n`;
      formattedText += `  ${entry.bulletPoints?.map((x) => x.value).join("\n  ")}\n\n`;
    });
  }

  /**
   * Skills
   */
  if (cv.skills && cv.skills.length > 0) {
    formattedText += `SKILLS:\n`;
    formattedText += cv.skills.map((skill) => skill.name).join(", ") + "\n";
  }

  return stripHtmlTags(formattedText);
};

const downloadPdf = async (
  cv: CvWithRelations,
  a4: NonNullable<RefObject<HTMLDivElement>["current"]>,
) => {
  const pageCount = Math.ceil(a4.clientHeight / A4_HEIGHT);
  const jsPDF = (await import("jspdf")).default;
  const pdf = new jsPDF({
    format: "a4",
    orientation: "portrait",
    unit: "px",
  });
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  const cvText = formatForAts(cv);
  pdf.setFontSize(0);
  const maxWidth = width - 40; // 20px margin on each side
  const lines = pdf.splitTextToSize(cvText, maxWidth) as string[];

  let lineIndex = 0;
  for (let i = 0; i < pageCount; i++) {
    const yOffset = i * A4_HEIGHT + PAGE_BREAK_HEIGHT * i;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(a4, {
      width: A4_WIDTH,
      height: A4_HEIGHT,
      windowHeight: A4_HEIGHT,
      windowWidth: A4_WIDTH,
      y: yOffset,
      scrollY: -yOffset,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, 0, width, height, undefined, "SLOW");

    // Adding text starting from the current page
    let yPos = 10;
    while (lineIndex < lines.length) {
      if (yPos > height - 10) break; // Check if we are at the end of the page
      const line = lines[lineIndex];
      if (!line) break;
      pdf.text(line, 20, yPos);
      yPos += 10;
      lineIndex++;
    }
  }

  pdf.save(`${cv.filename}.pdf`);
};

const DownloadButton = () => {
  const cv = useDataContext((state) => state.cv);
  const { a4Ref } = usePagination();

  const onClick = async () => {
    if (!cv || !a4Ref?.current) return;
    toast.info("Preparing your PDF...", { duration: 3000 });
    void downloadPdf(cv, a4Ref.current);
  };

  return (
    <button
      className="common flex-center interactive px-4 py-2"
      onClick={onClick}
      disabled={!cv}
      title="Download as PDF"
      aria-label="Download as PDF"
    >
      <IoCloudDownloadOutline size={20} aria-hidden />
    </button>
  );
};

export default DownloadButton;
