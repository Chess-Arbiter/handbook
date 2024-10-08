import { ELANGUAGES } from "./languages";

export interface IPageParams {
  lang: ELANGUAGES;
  prefix: string;
  page: string;
}

export interface IPageMetadata {
  title: string;
  description: string;
  parent: string;
  slug: string;
}

export interface IPage extends IPageMetadata {
  content: string;
}

export enum EPAGE_TYPES {
  MORE = "more",
  LAWS = "laws",
}

export interface ITAB {
  id: string;
  title_en: string;
  title_ru: string;
  title_hy: string;
  path: string;
}
