import Head from "next/head";
import AdditionalContents from "../../../../components/AdditionalContents/AdditionalContents";
import MainLayout from "../../../../layouts/MainLayout";
import { IPage } from "../../../../models/page";
import getPage from "../../../../utils/getPage";
import "../../../../styles/globals.css";
import "../../../../styles/theme.css";

export default async function PageContent(params: any) {
  const page = await getData(params);

  return (
    <>
      {/* <Head>
        <title>{page.title}</title>
        {page.description && (
          <meta name="description" content={page.description} />
        )}
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head> */}
      <MainLayout currentPageParent={page.parent}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}

async function getData({ params }: any) {
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
