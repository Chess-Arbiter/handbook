import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./ToggleThemeButton.module.css";
import { getTheme, toggleTheme } from "../../utils/theme";
import { Theme } from "../../constants/global";
import { IIconName } from "../../models/iconName";

interface IThemeIcon {
  [key: string]: IIconName;
}

const themeIcon: IThemeIcon = {
  dark: "dark-mode",
  light: "light-mode",
};

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState(getTheme);

  const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  function onToggleTheme() {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  }

  return (
    <button
      aria-label="theme"
      className={styles.button}
      onClick={onToggleTheme}
    >
      <Icon name={themeIcon[nextTheme]} />
    </button>
  );
}
