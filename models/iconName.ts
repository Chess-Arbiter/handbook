import { ELANGUAGES } from "./languages";

export type IIconName =
  | "dropdown"
  | "dark-mode"
  | "light-mode"
  | "fb"
  | "mobile"
  | ELANGUAGES.EN
  | ELANGUAGES.RU
  | ELANGUAGES.HY
  | "menu"
  | "close";

enum EIconNames {
  dropdown = "dropdown",
  darkMode = "dark-mode",
}
