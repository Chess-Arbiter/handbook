import Link from "next/link";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect";
import SocialLink from "../SocialLink/SocialLink";
import Icon from "../Icon/Icon";
import useMobile from "../../hooks/useMobile";
import { ELANGUAGES } from "../../models/languages";
import { ESocialLinks } from "../../models/socialLinks";
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
      <Link href="/rating-calculator" aria-label="Rating Calculator">
        <Icon name="calculator" />
      </Link>
      <LanguagesSelect asPath={asPath} lang={query.lang} />
      <SocialLink
        href={`${ESocialLinks.fb}.${query.lang}`}
        className={styles.fb_link}
        iconName={"fb"}
      />
      {!isMobile && (
        <>
          <SocialLink href={ESocialLinks.playStore} iconName={"mobile"} />
          <SocialLink href={`${ESocialLinks.github}`} iconName={"github"} />
        </>
      )}
    </footer>
  );
}
