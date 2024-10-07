import MainLayout from "../../../../layouts/MainLayout";
import AdditionalContents from "../../../../components/AdditionalContents/AdditionalContents";
import { siteTile } from "../../../../constants/titles";
import { IPage, IPageMetadata } from "../../../../models/page";
import { ELANGUAGES } from "../../../../models/languages";
import "../../../../styles/globals.css";
import "../../../../styles/theme.css";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IPageParams {
  lang: ELANGUAGES;
  prefix: string;
  page: string;
}

export async function generateMetadata({ params }: { params: IPageParams }) {
  const page = await getData({ params });

  return {
    title: `${page.title} | ${siteTile}`,
    description: page.description,
  };
}

export default async function PageContent({ params }: { params: IPageParams }) {
  const page = await getData({ params });

  return (
    <>
      <MainLayout currentPageParent={page.parent}>
        <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}

async function getData({ params }: { params: IPageParams }) {
  const postsDirectory = path.join(
    process.cwd(),
    "public",
    "content",
    `${params.lang}`,
    `${params.prefix}`,
    `${params.page}`
  );

  const filePath = path.join(postsDirectory, `content.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const metadataPath = path.join(postsDirectory, `metadata.json`);
  const metaDataJson = fs.readFileSync(metadataPath, "utf8");

  const postData: IPageMetadata = JSON.parse(metaDataJson);

  const page: IPage = {
    content: fileContents,
    ...postData,
  };

  return page;
}
