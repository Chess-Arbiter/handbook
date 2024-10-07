import MainLayout from "../../../../layouts/MainLayout";
import AdditionalContents from "../../../../components/AdditionalContents/AdditionalContents";
import getPage from "../../../../utils/getPage";
import { siteTile } from "../../../../constants/titles";
import { IPage, IPageMetadata } from "../../../../models/page";
import { ELANGUAGES } from "../../../../models/languages";
import "../../../../styles/globals.css";
import "../../../../styles/theme.css";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TurndownService from "turndown";

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
  const page = await getDataM({ params });

  return (
    <>
      <MainLayout currentPageParent={page.parent}>
        <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
        <AdditionalContents page={page.slug} />
      </MainLayout>
    </>
  );
}

async function getDataM({ params }: { params: IPageParams }) {
  // console.log({ params });

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
  // console.log({ postData });

  const page: IPage = {
    content: fileContents,
    ...postData,
  };

  return page;
}

async function getData({ params }: { params: IPageParams }) {
  // console.log({ params });

  const pageDoc = await getPage(params.page);
  const page: IPage = {
    title: pageDoc?.[`title_${params.lang}`] || "",
    description: pageDoc?.[`description_${params.lang}`] || "Chess rules",
    content: pageDoc?.[`content_${params.lang}`] || "",
    parent: pageDoc.parent || "",
    slug: pageDoc?.slug || "",
  };
  // console.log({ page });

  const postsDirectory = path.join(
    process.cwd(),
    "public",
    "content",
    `${params.lang}`,
    `${params.prefix}`,
    `${params.page}`
  );
  const turndownService = new TurndownService();
  const markdownContent = turndownService.turndown(page.content);

  const isCreated = createFolderIfNotExists(postsDirectory);
  if (isCreated) {
    createMarkdownFile(postsDirectory, "content", markdownContent);
    createJsonFile(postsDirectory, "metadata", {
      description: page.description,
      parent: page.parent,
      slug: page.slug,
      title: page.title,
    });
  }

  return page;
}

function createFolderIfNotExists(folderPath: string) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    return true;
  }
  return false;
}

// Function to create a markdown file
function createMarkdownFile(folder: string, fileName: string, content: string) {
  const filePath = path.join(folder, `${fileName}.md`);
  console.log({ filePath });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`${fileName}.md created successfully!`);
}

// Function to create a JSON file
function createJsonFile(folder: string, fileName: string, jsonObject: any) {
  const filePath = path.join(folder, `${fileName}.json`);
  fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2), "utf-8");
  console.log(`${fileName}.json created successfully!`);
}
