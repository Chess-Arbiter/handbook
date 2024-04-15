import { ELANGUAGES } from "../../models/languages";

interface IQuery {
  lang: ELANGUAGES;
  prefix: string;
  page: string;
}

export interface INavbarProps {
  currentPageParent: string;
  asPath: string;
  query: IQuery;
}
