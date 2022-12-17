import { useState } from "react";
import Image from "next/image";
import styles from "./sidebar..module.css";
import logo from "../../public/logo.png";
import { getTheme, toggleTheme } from "../../utils/theme";
import { Theme } from "../../constants/global";
import withClientSideComponent from "../../hoc/withClientSideComponent";

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
          <button onClick={onToggleTheme}>{nextTheme}</button>
        </div>
        <div className={styles.sidebar_tabs}>
          <a className={styles.active}>Basic</a>
          <a>Laws</a>
        </div>
      </header>
      <nav className={styles.navigation}>
        <a>
          Intro
          <span>Toggle</span>
        </a>
        <a>
          Intro
          <span>Toggle</span>
        </a>
      </nav>
      <footer className="sidebar__footer">Footer</footer>
    </aside>
  );
}

export default withClientSideComponent(Sidebar);
