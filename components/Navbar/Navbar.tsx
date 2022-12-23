import styles from "./sidebar.module.css";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import Accordion from "../Accordion/Accordion";
import { useRouter } from "next/router";
import MenuTabs from "../Menu/MenuTabs";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Branding from "../Branding/Branding";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavbarMobile from "./Navbar.mobile";
import NavbarDesktop from "./Navbar.desktop";

function Navbar({ currentPageParent }: { currentPageParent: string }) {
  const { asPath, query } = useRouter();
  const isMobile = useMediaQuery("(max-width:1024px)");

  return (
    <>
      {isMobile ? (
        <NavbarMobile
          currentPageParent={currentPageParent}
          asPath={asPath}
          query={query}
        />
      ) : (
        <NavbarDesktop
          currentPageParent={currentPageParent}
          asPath={asPath}
          query={query}
        />
      )}
    </>
  );
}

export default withClientSideComponent(Navbar);
