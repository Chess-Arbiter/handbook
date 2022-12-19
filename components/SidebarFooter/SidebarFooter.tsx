import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { LANGUAGES } from "../../models/languages";
import Icon from "../Icon/Icon";
import styles from "./SidebarFooter.module.css";

function LanguageLink({ lang }: { lang: any; pathname: string }) {
  function getLink() {
    const pathArr = window.location.pathname.split("/");
    pathArr.shift();
    pathArr[0] = lang;

    return `/${pathArr.join("/")}`;
  }

  return (
    <Link key={lang} href={getLink()} className={styles.lang}>
      <Icon name={lang} />
    </Link>
  );
}

export default function SidebarFooter() {
  const { query, pathname } = useRouter();
  const languages = useMemo((): LANGUAGES[] => {
    const ALL_LANGUAGES = [LANGUAGES.EN, LANGUAGES.RU, LANGUAGES.HY];
    const currentLanguage: any = query.lang || languages[0];
    ALL_LANGUAGES.splice(ALL_LANGUAGES.indexOf(currentLanguage), 1);
    ALL_LANGUAGES.unshift(currentLanguage);
    return ALL_LANGUAGES;
  }, [query.lang]);

  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <div className={styles.lang_wrapper}>
        {languages.map((lang) => (
          <LanguageLink key={lang} lang={lang} pathname={pathname} />
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
