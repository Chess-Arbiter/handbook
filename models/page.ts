export interface Page {
  title: string;
  content: string;
  description: string;
  parent: string;
}

export enum PAGE_TYPES {
  MORE = "more",
  LAWS = "laws",
}

export interface TAB {
  title_en: string;
  title_ru: string;
  title_hy: string;
  path: string;
  id: string;
}
