import styles from "./sidebar.module.css";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import Accordion from "../Accordion/Accordion";
import { useRouter } from "next/router";
import MenuTabs from "../Menu/MenuTabs";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Branding from "../Branding/Branding";
import { useState } from "react";
import Icon from "../Icon/Icon";

function Sidebar({
  currentPageParent,
  asPath,
  query,
}: {
  currentPageParent: string;
  asPath: any;
  query: any;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = isMenuOpen ? "close" : "menu";
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className={`${styles.mobile_navbar} ${
        isMenuOpen ? "menu_open" : "menu_close"
      }`}
    >
      <header className={styles.mobile_header}>
        <button onClick={toggleMenu} className={styles.menu_button}>
          <Icon name={menuIcon} />
        </button>
        <Branding />
        <ToggleThemeButton />
      </header>
      {isMenuOpen && (
        <div className={styles.mobile_menu_wrapper}>
          <MenuTabs lang={query.lang} activeTab={query.prefix} />
          <Accordion
            asPath={asPath}
            language={query.lang}
            currentSlug={query.page}
            defaultOpenedItem={currentPageParent}
            currentTab={query.prefix}
          />
        </div>
      )}
    </div>
  );
}

export default withClientSideComponent(Sidebar);
