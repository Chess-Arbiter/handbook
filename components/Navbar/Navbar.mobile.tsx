import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import MenuTabs from "../Menu/MenuTabs";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Branding from "../Branding/Branding";
import Icon from "../Icon/Icon";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect";
import SocialLink from "../SocialLink/SocialLink";
import withClientSideComponent from "../../hoc/withClientSideComponent";
// import usePrevious from "../../hooks/usePrevious";
import useMobile from "../../hooks/useMobile";
import { ESocialLinks } from "../../models/socialLinks";
import { INavbarProps } from "./Navbar.types";
import styles from "./sidebar.module.css";

function Sidebar({ currentPageParent, asPath, query }: INavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const menuIcon = isMenuOpen ? "close" : "menu";
  // const prevPrefix = usePrevious(query.prefix);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // useEffect(() => {
  //   if (prevPrefix === query.prefix) {
  //     setIsMenuOpen(false);
  //   }
  // }, [query.page, query.prefix, prevPrefix]);

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
        <div className={styles.mobile_header_right}>
          <LanguagesSelect asPath={asPath} lang={query.lang} />
          <ToggleThemeButton />

          <SocialLink
            href={`${ESocialLinks.fb}.${query.lang}`}
            iconName={"fb"}
          />
          {!isMobile && (
            <>
              <SocialLink href={ESocialLinks.playStore} iconName={"mobile"} />
              <SocialLink href={`${ESocialLinks.github}/handbook`} iconName={"github"} />
            </>
          )}
        </div>
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
