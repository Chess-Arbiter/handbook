import AdditionalContents from "../../../../components/AdditionalContents/AdditionalContents";
import MainLayout from "../../../../layouts/MainLayout";
import { IPage } from "../../../../models/page";
import getPage from "../../../../utils/getPage";
import "../../../../styles/globals.css";
import "../../../../styles/theme.css";
import { ELANGUAGES } from "../../../../models/languages";

interface IPageParams {
  lang: ELANGUAGES;
  prefix: string;
  page: string;
}

export async function generateMetadata({ params }: { params: IPageParams }) {
  const page = await getData({ params });

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function PageContent({ params }: { params: IPageParams }) {
  const page = await getData({ params });

  return (
    <>
      <MainLayout currentPageParent={page.parent}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}

async function getData({ params }: { params: IPageParams }) {
  const pageDoc = await getPage(params.page);
  const page: IPage = {
    title: pageDoc?.[`title_${params.lang}`] || "",
    description: pageDoc?.[`description_${params.lang}`] || "",
    content: pageDoc?.[`content_${params.lang}`] || "",
    parent: pageDoc.parent || "",
    slug: pageDoc?.slug || "",
  };

  return page;
}
