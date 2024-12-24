import type { Metadata } from "next";
import { type RouterOutputs } from "@/trpc/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Suspense } from "react";
import { format } from "date-fns";
import { UrlArrow } from "@/app/components/icons";
import { LayoutGrid } from "@/app/components/layout-grid";
import { privateRoutes } from "@/constants/routes.constants";
import { api } from "@/trpc/server";
import { Card, Link } from "@/ui";

export const metadata: Metadata = {
  title: "Your files — Vocatio",
};

const Skeleton = () => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,350px))] gap-4 rounded-lg"
      role="status"
      aria-label="Loading documents"
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
      <span className="sr-only">Loading documents...</span>
    </div>
  );
};

const Preview = (props: { cv: RouterOutputs["cv"]["getRecent"][number] }) => {
  const { cv } = props;

  return (
    <Card className="flex-between">
      <div className="flex-y gap-4">
        {/* {cv.designName && (
          <Image
            src={
              images.cvEditor.templates[cv.designName  ].src
            }
            alt="cv design preview"
            height={25}
            width={25}
          />
        )} */}
        <div className="space-y-1 [&_div]:max-w-[175px] [&_div]:truncate">
          <div>{cv.filename}</div>
          <div className="text-caption text-secondary">{cv.jobTitle}</div>
          <div className="text-caption text-secondary sm:hidden">
            {format(cv.createdAt!, "MMM d, yyyy")}
          </div>
        </div>
      </div>
      <small className="text-secondary hidden sm:block">
        {format(cv.createdAt!, "MMM d, yyyy")}
      </small>
    </Card>
  );
};

const Content = (props: { cv: RouterOutputs["cv"]["getRecent"][number] }) => {
  const { cv } = props;

  return (
    <div className="relative flex size-full max-h-[800px] max-w-[1200px] flex-col gap-11 overflow-y-auto rounded bg-layer-1 p-5 pt-0">
      <header className="flex-between py-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-headline font-medium">{cv.name}</h3>
          <p className="text-secondary">{cv.jobTitle}</p>
        </div>
        {cv.image && (
          <img
            src={cv.image}
            alt="user image"
            height={100}
            width={100}
            className="rounded-full"
          />
        )}
      </header>

      <Link href={privateRoutes.editor(cv.id, cv.vacancy?.companyName)}>
        View CV <UrlArrow />
      </Link>

      <div>Created at: {format(cv.createdAt!, "MMM d, yyyy")}</div>
      <div>Filename: {cv.filename}</div>
      {cv.vacancy && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>View associated vacancy</AccordionTrigger>
            <AccordionContent className="py-5">
              {/* <CompanyPresentator
                lg
                companyName={cv.vacancy.companyName}
                jobTitle={cv.vacancy.jobTitle}
                image={cv.vacancy.image}
              /> */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

const Grid = () => {
  //const cvs = await api.cv.getRecent();
  const cvs = []

  if (!cvs || cvs.length === 0)
    return (
      <div className="flex-center size-full flex-col">
        {/* <Image src={images.notion.emptyBox} alt="No documents found" width={250} height={250} /> */}
        <div className="flex-center flex-col text-center">
          <h1 className="text-headline-2 font-semibold">Your story is waiting to be told.</h1>
          <p>
            AI tailors your CVs in 5 seconds, giving you the best shot at all jobs you apply to.
          </p>
        </div>
      </div>
    );

  const cards = cvs.map((cv) => ({
    id: cv.id,
    Content: <Content cv={cv} />,
    Preview: <Preview cv={cv} />,
  }));

  return (
    <LayoutGrid
      cards={cards}
      className="grid grid-cols-[repeat(auto-fit,minmax(300px,350px))] gap-4"
    />
  );
};

const FilesPage = () => {
  return (
    <main className="wrapper grow">
      <Suspense fallback={<Skeleton />}>
        <Grid />
      </Suspense>
    </main>
  );
};

export default FilesPage;
