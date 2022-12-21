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
import Accordion from "../Accordion/Accordion";
import { useRouter } from "next/router";
import { sideBarTabs } from "../../constants/sidebar";
import Link from "next/link";

interface IthemeIcon {
  [key: string]: IIconName;
}

const themeIcon: IthemeIcon = {
  dark: "dark-mode",
  light: "light-mode",
};

function Sidebar({ currentPageParent }: { currentPageParent: string }) {
  const [theme, setTheme] = useState(getTheme);
  const { asPath, query } = useRouter();

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
            {sideBarTabs.map((tab: any) => (
              <Link
                className={`${tab.id === query.prefix ? styles.active : ""}`}
                key={tab.path}
                href={`/${query.lang}/${tab.path}`}
              >
                {tab[`title_${query.lang}`]}
              </Link>
            ))}
          </div>
        </header>
        <Accordion
          asPath={asPath}
          language={query.lang}
          currentSlug={query.page}
          defaultOpenedItem={currentPageParent}
          currentTab={query.prefix}
        />
        <SidebarFooter query={query} asPath={asPath} />
      </div>
    </aside>
  );
}

export default withClientSideComponent(Sidebar);
