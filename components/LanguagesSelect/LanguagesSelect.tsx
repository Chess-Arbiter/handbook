import { useMemo } from "react";
import Link from "next/link";
import { LANGUAGES } from "../../models/languages";
import getLink from "../../utils/getLink";
import styles from "./LanguagesSelect.module.css";
import Icon from "../Icon/Icon";

export default function LanguagesSelect({
  lang,
  asPath,
}: {
  lang: any;
  asPath: any;
}) {
  const languages = useMemo((): LANGUAGES[] => {
    const ALL_LANGUAGES = [LANGUAGES.EN, LANGUAGES.RU, LANGUAGES.HY];
    const currentLanguage: any = lang || ALL_LANGUAGES[0];
    ALL_LANGUAGES.splice(ALL_LANGUAGES.indexOf(currentLanguage), 1);
    ALL_LANGUAGES.unshift(currentLanguage);
    return ALL_LANGUAGES;
  }, [lang]);
  return (
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
  );
}
