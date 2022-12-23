import Icon from "../Icon/Icon";
import LanguagesSelect from "../LanguagesSelect/LanguagesSelect copy";
import styles from "./SidebarFooter.module.css";

export default function SidebarFooter({ query, asPath }: any) {
  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <LanguagesSelect asPath={asPath} lang={query.lang} />
      <a
        className={styles.fb_icon}
        href={`https://www.facebook.com/chessarbiter.info.${query.lang}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="fb" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.chessarbiter&pli=1"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="mobile" />
      </a>
    </footer>
  );
}
