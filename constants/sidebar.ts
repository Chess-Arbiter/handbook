import { menuTrees } from "../data/menuTrees";
import { PAGE_TYPES, TAB } from "../models/page";

export const sideBarTabs: TAB[] = [
  {
    title_en: "Laws",
    title_ru: "Правила",
    title_hy: "Կանոններ",
    id: PAGE_TYPES.LAWS,
    path: `${PAGE_TYPES.LAWS}/${
      menuTrees.filter(({ type }) => type === PAGE_TYPES.LAWS)[0].pages[0].slug
    }`,
  },
  {
    title_en: "More",
    title_ru: "Больше",
    title_hy: "Ավելին",
    id: PAGE_TYPES.BASIC,
    path: `${PAGE_TYPES.BASIC}/${
      menuTrees.filter(({ type }) => type === PAGE_TYPES.BASIC)[0].pages[0].slug
    }`,
  },
];
