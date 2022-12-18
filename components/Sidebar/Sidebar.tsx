import { useState } from "react";
import Image from "next/image";
import styles from "./sidebar..module.css";
import logo from "../../public/logo.png";
import { getTheme, toggleTheme } from "../../utils/theme";
import { Theme } from "../../constants/global";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import Icon from "../Icon/Icon";
import SidebarFooter from "../SidebarFooter/SidebarFooter";

const themeIcon = {
  dark: "dark-mode",
  light: "light-mode",
} as const;

function Sidebar() {
  const [theme, setTheme] = useState(getTheme);
  const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  const onToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };
  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <div className={styles.logo_wrapper}>
          <Image src={logo} alt="logo" />
          <span>Chess arbiter</span>
          <button onClick={onToggleTheme}>
            <Icon name={themeIcon[nextTheme]} />
          </button>
        </div>
        <div className={styles.sidebar_tabs}>
          <a className={styles.active}>Basic</a>
          <a>Laws</a>
        </div>
      </header>
      <nav className={styles.navigation}>
        <a className={styles.active}>
          Intro
          <Icon name="dropdown" />
        </a>
        <a>
          Intro
          <Icon name="dropdown" />
        </a>
      </nav>
      <SidebarFooter />
    </aside>
  );
}

export default withClientSideComponent(Sidebar);
