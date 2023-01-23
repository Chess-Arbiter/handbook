import Head from "next/head";
import AdditionalContents from "../../../components/AdditionalContents/AdditionalContents";
import MainLayout from "../../../layouts/MainLayout";
import { IPage } from "../../../models/page";
import getPage from "../../../utils/getPage";

export default function PageContent({ page }: { page: IPage }) {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        {page.description && (
          <meta name="description" content={page.description} />
        )}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <MainLayout currentPageParent={page.parent}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const pageDoc = await getPage(params.page);
    const page: IPage = {
      title: pageDoc?.[`title_${params.lang}`] || "",
      description: pageDoc?.[`description_${params.lang}`] || "",
      content: pageDoc?.[`content_${params.lang}`] || "",
      parent: pageDoc.parent || "",
      slug: pageDoc?.slug || "",
    };

    return {
      props: { page },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
