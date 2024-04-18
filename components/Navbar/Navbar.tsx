"use client";

import { usePathname, useParams } from "next/navigation";
import NavbarMobile from "./Navbar.mobile";
import NavbarDesktop from "./Navbar.desktop";
import withClientSideComponent from "../../hoc/withClientSideComponent";
import useMediaQuery from "../../hooks/useMediaQuery";

function Navbar({ currentPageParent }: { currentPageParent: string }) {
  const asPath = usePathname();
  const query = useParams();

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
