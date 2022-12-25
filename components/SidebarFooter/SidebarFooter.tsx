import { ESocialLinks } from "../../models/socialLinks";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect";
import SocialLink from "../SocialLink/SocialLink";
import styles from "./SidebarFooter.module.css";

export default function SidebarFooter({
  query,
  asPath,
}: {
  query: any;
  asPath: string;
}) {
  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <LanguagesSelect asPath={asPath} lang={query.lang} />

      <SocialLink href={`${ESocialLinks.fb}.${query.lang}`} iconName={"fb"} />
      <SocialLink href={ESocialLinks.playStore} iconName={"mobile"} />
    </footer>
  );
}
