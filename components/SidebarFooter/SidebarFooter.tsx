import Link from "next/link";
import { useMemo } from "react";
import { LANGUAGES } from "../../models/languages";
import getLink from "../../utils/getLink";
import Icon from "../Icon/Icon";
import styles from "./SidebarFooter.module.css";

export default function SidebarFooter({ query, asPath }: any) {
  const languages = useMemo((): LANGUAGES[] => {
    const ALL_LANGUAGES = [LANGUAGES.EN, LANGUAGES.RU, LANGUAGES.HY];
    const currentLanguage: any = query.lang || ALL_LANGUAGES[0];
    ALL_LANGUAGES.splice(ALL_LANGUAGES.indexOf(currentLanguage), 1);
    ALL_LANGUAGES.unshift(currentLanguage);
    return ALL_LANGUAGES;
  }, [query.lang]);

  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <div className={styles.lang_wrapper}>
        {languages.map((lang) => (
          <Link
            key={lang}
            href={getLink(asPath, 0, lang)}
            className={styles.lang}
          >
            <Icon name={lang} />
          </Link>
        ))}
      </div>
      <a className={styles.fb_icon}>
        <Icon name="fb" />
      </a>
      <a>
        <Icon name="mobile" />
      </a>
    </footer>
  );
}
