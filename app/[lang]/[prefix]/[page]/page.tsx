import MainLayout from "../../../../layouts/MainLayout";
import AdditionalContents from "../../../../components/AdditionalContents/AdditionalContents";
import { siteTitle } from "../../../../constants/titles";
import "../../../../styles/globals.css";
import "../../../../styles/theme.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import getData from "../../../../utils/getData";
import { IPageParams } from "../../../../models/page";

export async function generateMetadata(props: { params: Promise<IPageParams> }) {
  const params = await props.params;
  const page = getData(params);

  return {
    title: `${page.title} | ${siteTitle}`,
    description: page.description,
    openGraph: {
      images: "images/logo.webp",
    },
  };
}

export default async function PageContent(props: { params: Promise<IPageParams> }) {
  const params = await props.params;
  const page = getData(params);

  return (
    <>
      <MainLayout currentPageParent={page.parent}>
        <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}
