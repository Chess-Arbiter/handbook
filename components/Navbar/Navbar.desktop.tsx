import Accordion from "../Accordion/Accordion";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import MenuTabs from "../Menu/MenuTabs";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Branding from "../Branding/Branding";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import { INavbarProps } from "./Navbar.types";
import styles from "./sidebar.module.css";

function Sidebar({ currentPageParent, asPath, query }: INavbarProps) {
  return (
    <aside>
      <div className={styles.sidebar}>
        <header className={styles.sidebar__header}>
          <div className={styles.logo_wrapper}>
            <Branding />
            <ToggleThemeButton />
          </div>
          <MenuTabs lang={query.lang} activeTab={query.prefix} />
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
