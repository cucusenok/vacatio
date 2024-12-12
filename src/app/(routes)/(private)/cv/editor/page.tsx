import { Suspense } from "react";
import { pick } from "lodash-es";
import { MainNavigation } from "@/app/components/main-navigation";
import { createCvWithRelations } from '@/helpers/cv.helpers';
import { removeNullishEntries } from "@/helpers/object.helpers";
import { CvRelationsPicker } from "@/constants/cv.constants";
import { CV_ID_PARAM, PUBLIC_KEY_PARAM } from "@/constants/url-params.constants";
import { A4 } from '@/cv/components/a4';
import { A4MutationObserver } from "@/cv/components/a4-mutation-observer";
import { DataClearer } from "@/cv/components/data-clearer";
import { DataInitializer } from "@/cv/components/data-initializer";
import { PusherListener } from "@/cv/components/pusher-listener";
import { TopCenterToolbar } from "@/cv/components/toolbars/top-center-toolbar";
import { TopRightToolbar } from "@/cv/components/toolbars/top-right-toolbar";
import { Viewers } from "@/cv/components/viewers";
import { DataProvider } from "@/cv/stores/data/data-store-instance-provider";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/ui";

export { generateMetadata } from "./metadata";

const CvPreviewInitializer = async () => {


  return <DataInitializer cv={null} />;
};

const ExistingCvInitializer = async (props: { cvId: string; publicKey?: string }) => {
  const { cvId, publicKey } = props;

  /*const [cv, vacancy] = await Promise.all([
    api.cv.get({ cvId, publicKey, with: CvRelationsPicker }),
    api.vacancy.getByCvId({ cvId }),
  ]);*/

  return <DataInitializer cv={null} vacancy={null} />;
};

const Header = () => {
  return (
    <header className="flex-between mb-11 flex-wrap gap-4 px-8 py-6 [&>*]:flex-1">
      <MainNavigation />
      <TopCenterToolbar />
      <TopRightToolbar />
    </header>
  );
};

const EditorPage = (
  props: PageProps<{ [CV_ID_PARAM]: string | undefined; [PUBLIC_KEY_PARAM]: string | undefined }>,
) => {
  const { [CV_ID_PARAM]: cvId, [PUBLIC_KEY_PARAM]: publicKey } = props.searchParams;

  return (
    <>
      <DataProvider>
        <PusherListener />
        <Header />
        <Suspense>
          <CvPreviewInitializer />
          {cvId && <ExistingCvInitializer cvId={cvId} publicKey={publicKey} />}
        </Suspense>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <A4 />
          </ResizablePanel>
          <ResizableHandle />
          <Viewers />
        </ResizablePanelGroup>
        <DataClearer />
      </DataProvider>
      <A4MutationObserver />
    </>
  );
};

export default EditorPage;
