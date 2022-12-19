import { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import logo from "../../public/logo.png";
import { getTheme, toggleTheme } from "../../utils/theme";
import { Theme } from "../../constants/global";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import Icon from "../Icon/Icon";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import { IIconName } from "../../models/iconName";

interface IthemeIcon {
  [key: string]: IIconName;
}

const themeIcon: IthemeIcon = {
  dark: "dark-mode",
  light: "light-mode",
};

function Sidebar() {
  const [theme, setTheme] = useState(getTheme);
  const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  const onToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <aside>
      <div className={styles.sidebar}>
        <header className={styles.sidebar__header}>
          <div className={styles.logo_wrapper}>
            <Image src={logo} alt="logo" />
            <span>Chess arbiter</span>
            <button onClick={onToggleTheme}>
              <Icon name={themeIcon[nextTheme]} />
            </button>
          </div>
          <div className={styles.sidebar_tabs}>
            <a>Laws</a>
            <a className={styles.active}>Basic</a>
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
      </div>
    </aside>
  );
}

export default withClientSideComponent(Sidebar);
