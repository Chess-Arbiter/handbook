import { menuTrees } from "../data/menuTrees";
import { EPAGE_TYPES, ITAB } from "../models/page";

export const sideBarTabs: ITAB[] = [
  {
    title_en: "Laws",
    title_ru: "Правила",
    title_hy: "Կանոններ",
    id: EPAGE_TYPES.LAWS,
    path: `${EPAGE_TYPES.LAWS}/${
      menuTrees.filter(({ type }) => type === EPAGE_TYPES.LAWS)[0].pages[0].slug
    }`,
  },
  {
    title_en: "More",
    title_ru: "Больше",
    title_hy: "Ավելին",
    id: EPAGE_TYPES.MORE,
    path: `${EPAGE_TYPES.MORE}/${
      menuTrees.filter(({ type }) => type === EPAGE_TYPES.MORE)[0].pages[0].slug
    }`,
  },
];
