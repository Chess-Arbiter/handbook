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
        <Image src={logo} alt="logo" />
        <span>Chess arbiter</span>
        <button onClick={onToggleTheme}>{nextTheme}</button>
      </header>
      <div className={styles.sidebar__content}> Content</div>
      <footer className="sidebar__footer">Footer</footer>
    </aside>
  );
}

export default withClientSideComponent(Sidebar);
