import styles from "./sidebar.module.css";
import Accordion from "../Accordion/Accordion";
import MenuTabs from "../Menu/MenuTabs";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Branding from "../Branding/Branding";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect";
import usePrevious from "../../hooks/usePrevious";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import SocialLink from "../SocialLink/SocialLink";
import { ESocialLinks } from "../../models/socialLinks";
import useMobile from "../../hooks/useMobile";

function Sidebar({
  currentPageParent,
  asPath,
  query,
}: {
  currentPageParent: string;
  asPath: string;
  query: any;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const menuIcon = isMenuOpen ? "close" : "menu";
  const prevPrefix = usePrevious(query.prefix);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (prevPrefix === query.prefix) {
      setIsMenuOpen(false);
    }
  }, [query.page, query.prefix, prevPrefix]);

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
            <SocialLink href={ESocialLinks.playStore} iconName={"mobile"} />
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
