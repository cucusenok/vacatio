import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import type { Vacancy } from "@/types/vacancy.types";
import { DataRow } from "@/app/components/data-row";
import { type GridItem, LayoutGrid } from "@/app/components/layout-grid";
import { api } from "@/trpc/server";
import { Card } from "@/ui";

export const metadata: Metadata = {
  title: "Your application history — Vocatio",
  description: "Here you can see all your job applications",
};

export const revalidate = false;

const Skeleton = () => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,350px))] gap-4 rounded-lg"
      role="status"
      aria-label="Loading vacancies"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <Card key={i} className="flex-between animate-pulse" aria-hidden>
          <div className="flex-y gap-4">
            <div className="bg-placeholder h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col gap-1">
              <div className="bg-placeholder h-5 w-40 rounded" />
              <div className="bg-placeholder h-4 w-32 rounded" />
            </div>
          </div>
        </Card>
      ))}
      <span className="sr-only">Loading vacancies...</span>
    </div>
  );
};

const Preview = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return (
    <Card className="flex-y gap-4">
      {vacancy.image && (
        <Image
          src={vacancy.image}
          alt="Company logo"
          height={50}
          width={50}
          className="rounded-full"
        />
      )}
      <div className="flex flex-col gap-1">
        <h2 className="max-w-[170px] truncate text-md">{vacancy.companyName}</h2>
        <small className="text-secondary max-w-[170px] truncate">{vacancy.jobTitle}</small>
      </div>
    </Card>
  );
};

const Content = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return (
    <div className="relative flex size-full max-h-[800px] max-w-[1200px] flex-col gap-11 overflow-y-auto rounded bg-layer-1 p-5 pt-0">
      <header className="flex-between sticky inset-0 z-10 flex-wrap gap-5 bg-layer-1 py-5">
        <div>
          <h2 className="text-headline font-medium">{vacancy.companyName}</h2>
          <p className="text-secondary">{vacancy.jobTitle}</p>
        </div>
      </header>

      {Boolean(vacancy.location ?? vacancy.requiredRemote) && (
        <div className="space-y-4">
          {/* {vacancy.salary && <DataRow name="Salary" value={vacancy.salary} />} */}
          {vacancy.location && <DataRow name="Location" value={vacancy.location} />}
          {vacancy.requiredRemote && <DataRow name="Job setting" value={vacancy.requiredRemote} />}
        </div>
      )}

      {vacancy.aiSummary && (
        <div className="flex flex-col gap-3">
          <span className="gradient-text font-medium">Job summary by Gemini AI:</span>
          <span>{vacancy.aiSummary}</span>
        </div>
      )}

      <footer className="flex flex-col gap-4">
        {/* {vacancy.responsibilities && (
          <AccordionList
            button={<Button>Read responsibilities</Button>}
            items={vacancy.responsibilities}
          />
        )} */}
      </footer>
    </div>
  );
};

const Grid = async () => {
  const vacancies = await api.vacancy.getUserVacancies();

  /**
   * todo: 0 vacancies placeholder
   */

  const cards = vacancies.map((vacancy) => ({
    id: vacancy.id,
    Content: <Content vacancy={vacancy} />,
    Preview: <Preview vacancy={vacancy} />,
  }));

  return (
    <LayoutGrid
      cards={cards as GridItem[]}
      className="grid grid-cols-[repeat(auto-fit,minmax(300px,350px))] gap-4"
    />
  );
};

const ApplicationHistoryPage = () => {
  return (
    <main className="wrapper">
      <Suspense fallback={<Skeleton />}>
        <Grid />
      </Suspense>
    </main>
  );
};

export default ApplicationHistoryPage;
