import { ELANGUAGES } from "../../models/languages";

interface IQuery {
  lang: ELANGUAGES;
  prefix: "laws" | "more";
  page: string;
}

export interface INavbarProps {
  currentPageParent: string;
  asPath: string;
  query: IQuery;
}
