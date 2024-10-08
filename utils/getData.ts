import fs from "fs";
import path from "path";
import { contentFileName, jsonFileName } from "../constants/fileNames";
import { IPage, IPageMetadata, IPageParams } from "../models/page";

export default function getData(params: IPageParams): IPage {
  const postsDirectory = getDirectory(params);
  const { content, metaDataJson } = getFilesContent(postsDirectory);
  const metadata = getMetadata(metaDataJson);

  return {
    content,
    ...metadata,
  };
}

function getDirectory(params: IPageParams) {
  const { lang, prefix, page } = params;

  return path.join(process.cwd(), "public", "content", lang, prefix, page);
}

function getFilesContent(postsDirectory: string) {
  const contentPath = path.join(postsDirectory, contentFileName);
  const metadataPath = path.join(postsDirectory, jsonFileName);

  const [content, metaDataJson] = [contentPath, metadataPath].map((file) =>
    fs.readFileSync(file, "utf8")
  );

  return { content, metaDataJson };
}

function getMetadata(metaDataJson: string): IPageMetadata {
  return JSON.parse(metaDataJson);
}
