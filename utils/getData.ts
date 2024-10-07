import fs from "fs";
import path from "path";
import { IPage, IPageMetadata, IPageParams } from "../models/page";

export default async function getData({ params }: { params: IPageParams }) {
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
