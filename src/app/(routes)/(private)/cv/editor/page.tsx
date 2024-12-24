import { Suspense } from "react";
import { pick } from "lodash-es";
import { MainNavigation } from "@/app/components/main-navigation";
import { createCvWithRelations } from '@/helpers/cv.helpers';
import { removeNullishEntries } from "@/helpers/object.helpers";
import { CvRelationsPicker } from "@/constants/cv.constants";
import { CV_ID_PARAM, PUBLIC_KEY_PARAM } from "@/constants/url-params.constants";
import { A4 } from '@/cv/components/a4';
import { DataClearer } from "@/cv/components/data-clearer";
import { DataInitializer } from "@/cv/components/data-initializer";
import { PusherListener } from "@/cv/components/pusher-listener";
import { TopCenterToolbar } from "@/cv/components/toolbars/top-center-toolbar";
import { TopRightToolbar } from "@/cv/components/toolbars/top-right-toolbar";
import { Viewers } from "@/cv/components/viewers";
import { DataProvider } from "@/cv/stores/data/data-store-instance-provider";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/ui";


// Subtypes for nested structures

export type CvContactEntry = {
    id?: string | null;
    name?: string | null;
    value?: string | null;
    icon?: string | null;
};

export type CvEducationEntry = {
    id?: string | null;
    title?: string | null;
    place?: string | null;
    period?: string | null;
    image?: string | null;
};

export type CvSkillEntry = {
    id?: string | null;
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    createdAt?: string | Date | null;
    updatedAt?: string | Date | null;
};

export type CvLanguageEntry = {
    id?: string | null;
    name?: string | null;
    value?: string | null;
    icon?: string | null;
};

export type CvBulletPoint = {
    id?: string | null;
    value?: string | null;
    cvExperienceId?: string | null;
};

export type CvExperienceEntry = {
    id?: string | null;
    place?: string | null;
    title?: string | null;
    period?: string | null;
    image?: string | null;
    bulletPoints?: CvBulletPoint[] | null;
    derivedFromExperienceId?: string | null;
};

// Main schema using subtypes

export type CvWithRelationsSchema = {
    id?: string | null;
    image?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    jobTitle?: string | null;
    designName?: string | null;
    isDefault?: boolean | null;
    filename?: string | null;
    summary?: string | null;
    coverLetter?: string | null;
    publicKey?: string | null;
    contacts?: CvContactEntry[] | null;
    educations?: CvEducationEntry[] | null;
    skills?: CvSkillEntry[] | null;
    languages?: CvLanguageEntry[] | null;
    experiences?: CvExperienceEntry[] | null;
};


const data = {
    "id": "12345",
    "image": "https://example.com/profile.jpg",
    "createdAt": "2023-12-01T10:00:00Z",
    "updatedAt": "2023-12-15T14:30:00Z",
    "name": "John Doe",
    "jobTitle": "Software Engineer",
    "designName": "Modern CV",
    "isDefault": true,
    "filename": "john_doe_cv.pdf",
    "summary": "Experienced software engineer with expertise in full-stack development.",
    "coverLetter": "Dear Hiring Manager, I am excited to apply for the position...",
    "publicKey": "abcd1234efgh5678",
    "contacts": [
        {
            "id": "1",
            "name": "Email",
            "value": "john.doe@example.com",
            "icon": "email-icon.png"
        },
        {
            "id": "2",
            "name": "Phone",
            "value": "+1234567890",
            "icon": "phone-icon.png"
        }
    ],
    "educations": [
        {
            "id": "1",
            "title": "Bachelor of Science in Computer Science",
            "place": "Example University",
            "period": "2015-2019",
            "image": "university-logo.png"
        }
    ],
    "skills": [
        {
            "id": "1",
            "name": "JavaScript",
            "value": "Advanced",
            "icon": "javascript-icon.png",
            "createdAt": "2022-01-01T00:00:00Z",
            "updatedAt": "2023-01-01T00:00:00Z"
        },
        {
            "id": "2",
            "name": "React",
            "value": "Intermediate",
            "icon": "react-icon.png",
            "createdAt": null,
            "updatedAt": null
        }
    ],
    "languages": [
        {
            "id": "1",
            "name": "English",
            "value": "Fluent",
            "icon": "english-icon.png"
        },
        {
            "id": "2",
            "name": "Spanish",
            "value": "Intermediate",
            "icon": "spanish-icon.png"
        }
    ],
    "experiences": [
        {
            "id": "1",
            "place": "Tech Company",
            "title": "Frontend Developer",
            "period": "2020-2023",
            "image": "company-logo.png",
            "bulletPoints": [
                {
                    "id": "1",
                    "value": "Developed user interfaces for web applications.",
                    "cvExperienceId": "1"
                },
                {
                    "id": "2",
                    "value": "Collaborated with backend teams to design RESTful APIs.",
                    "cvExperienceId": "1"
                }
            ],
            "derivedFromExperienceId": null
        }
    ]
}


export { generateMetadata } from "./metadata";

const CvPreviewInitializer = () => {


  return <DataInitializer cv={null} />;
};

const ExistingCvInitializer = (props: { cvId: string; publicKey?: string }) => {
  return <DataInitializer cv={data} vacancy={null} />;
};

const Header = () => {
  return (
    <header className="flex-between mb-11 flex-wrap gap-4 px-8 py-6 [&>*]:flex-1">
      <MainNavigation />
      {/*<TopCenterToolbar />*/}
{/*
      <TopRightToolbar />
*/}
    </header>
  );
};

const EditorPage = (
  props: PageProps<{ [CV_ID_PARAM]: string | undefined; [PUBLIC_KEY_PARAM]: string | undefined }>,
) => {
  //const { [CV_ID_PARAM]: cvId, [PUBLIC_KEY_PARAM]: publicKey } = props.searchParams;

  const cvId = "1";
    const publicKey = "test"
  return (
    <>
        hello
      <DataProvider>
{/*
        <PusherListener />
*/}
        <Header />
        <Suspense>
{/*
          <CvPreviewInitializer />
*/}
{/*
          {cvId && <ExistingCvInitializer cvId={cvId} publicKey={publicKey} />}
*/}
        </Suspense>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <A4 />
          </ResizablePanel>
          <ResizableHandle />
          <Viewers />
        </ResizablePanelGroup>
{/*
        <DataClearer />
*/}
      </DataProvider>
{/*      <A4MutationObserver />*/}
    </>
  );
};

export default EditorPage;
