import { ELANGUAGES } from "../../models/languages";

export interface IAccordionProps {
  defaultOpenedItem: string;
  currentSlug: string;
  language: ELANGUAGES;
  asPath: string;
  currentTab: string;
}
