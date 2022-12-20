import Head from "next/head";
import Data from "../../../constants/data";
import { Page } from "../../../models/page";
import getPage from "../../../utils/getPage";

export default function PageContent({ page }: { page: Page }) {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        {page.description && (
          <meta name="description" content={page.description} />
        )}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const pageDoc = await getPage(params.page);
    const page: Page = {
      title: pageDoc?.[`title_${params.lang}`] || "",
      description: pageDoc?.[`description_${params.lang}`] || "",
      content: pageDoc?.[`content_${params.lang}`] || "",
    };

    return {
      props: { page: page },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
