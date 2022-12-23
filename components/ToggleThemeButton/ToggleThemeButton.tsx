import { useState } from "react";
import { getTheme, toggleTheme } from "../../utils/theme";
import { IIconName } from "../../models/iconName";
import Icon from "../Icon/Icon";
import { Theme } from "../../constants/global";
import styles from "./ToggleThemeButton.module.css";

interface IthemeIcon {
  [key: string]: IIconName;
}

const themeIcon: IthemeIcon = {
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
    <button className={styles.button} onClick={onToggleTheme}>
      <Icon name={themeIcon[nextTheme]} />
    </button>
  );
}
