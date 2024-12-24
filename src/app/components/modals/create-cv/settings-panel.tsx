import { startCase } from "lodash-es";
import { images } from "@/constants/images.constants";
import { GLASSDOOR_JOB_SEARCH_URL, LINKEDIN_JOB_SEARCH_URL } from "@/constants/routes.constants";
import { Chevron } from "@/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Link, Switch } from "@/ui";

const TailorSection = () => {
  const switches = ["job-title", "summary", "skills", "experience"];

  return (
    <section className="flex flex-col gap-2 px-4">
      <h2 className="text-xs font-bold text-muted">Tailor</h2>
      {switches.map((name) => (
        <label
          key={name}
          className="flex-between cursor-pointer select-none gap-2 text-sm font-medium"
        >
          {startCase(name)}
          <Switch name={name} defaultChecked />
        </label>
      ))}
    </section>
  );
};

const AdvancedSection = () => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="advanced" className="flex flex-col gap-2">
          <AccordionTrigger className="text-xs font-bold text-muted">
            Advanced
            <Chevron className="chevron rotate-[-90deg]" />
          </AccordionTrigger>
          <AccordionContent>
            <label className="flex-between cursor-pointer select-none gap-2 text-sm font-medium">
              Quantify experience
              <Switch />
            </label>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const JobSearchSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="px-4 text-xs font-bold">Search jobs on</h2>
      <div>
        <Link
          href={LINKEDIN_JOB_SEARCH_URL}
          className="with-icon accent-2 w-full px-4 py-1 text-xs"
          newTab
        >
          <img src={images.jobBoards.linkedin} alt="LinkedIn" width={16} height={16} />
          LinkedIn
        </Link>
        <Link
          href={GLASSDOOR_JOB_SEARCH_URL}
          className="with-icon accent-2 w-full px-4 py-1 text-xs"
          newTab
        >
          <img src={images.jobBoards.glassdoor} alt="Glassdoor" width={16} height={22} />
          Glassdoor
        </Link>
      </div>
    </section>
  );
};

export const SettingsPanel = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-layer-2 py-3 text-layer-2">
      <TailorSection />
      <AdvancedSection />
      <JobSearchSection />
    </div>
  );
};
