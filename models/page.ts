export interface IPage {
  title: string;
  content: string;
  description: string;
  parent: string;
  slug: string
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
