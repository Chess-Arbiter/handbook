import useMobile from "../../hooks/useMobile";
import { ELANGUAGES } from "../../models/languages";
import { ESocialLinks } from "../../models/socialLinks";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect";
import SocialLink from "../SocialLink/SocialLink";
import styles from "./SidebarFooter.module.css";

export default function SidebarFooter({
  query,
  asPath,
}: {
  query: {
    lang: ELANGUAGES;
    prefix: string;
    page: string;
  };
  asPath: string;
}) {
  const isMobile = useMobile();
  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <LanguagesSelect asPath={asPath} lang={query.lang} />
      <SocialLink
        href={`${ESocialLinks.fb}.${query.lang}`}
        className={styles.fb_link}
        iconName={"fb"}
      />
      {/* {!isMobile && (
        <SocialLink href={ESocialLinks.playStore} iconName={"mobile"} />
      )} */}
    </footer>
  );
}
