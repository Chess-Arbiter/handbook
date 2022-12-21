import { menuTrees } from "../data/menuTrees";
import { PAGE_TYPES, TAB } from "../models/page";

export const sideBarTabs: TAB[] = [
  {
    title_en: "Basic EN",
    title_ru: "Basic RU",
    title_hy: "Basic HY",
    id: PAGE_TYPES.BASIC,
    path: `${PAGE_TYPES.BASIC}/${
      menuTrees.filter(({ type }) => type === PAGE_TYPES.BASIC)[0].pages[0].slug
    }`,
  },
  {
    title_en: "Laws EN",
    title_ru: "Laws RU",
    title_hy: "Laws HY",
    id: PAGE_TYPES.LAWS,
    path: `${PAGE_TYPES.LAWS}/${
      menuTrees.filter(({ type }) => type === PAGE_TYPES.LAWS)[0].pages[0].slug
    }`,
  },
];
