import { useMemo } from "react";
import Link from "next/link";
import { ELANGUAGES } from "../../models/languages";
import getLink from "../../utils/getLink";
import styles from "./LanguagesSelect.module.css";
import Icon from "../Icon/Icon";
import useMobile from "../../hooks/useMobile";

export default function LanguagesSelect({
  lang,
  asPath,
}: {
  lang: ELANGUAGES;
  asPath: string;
}) {
  const languages = useMemo((): ELANGUAGES[] => {
    const ALL_LANGUAGES = [ELANGUAGES.EN, ELANGUAGES.RU, ELANGUAGES.HY];
    const currentLanguage: ELANGUAGES = lang || ALL_LANGUAGES[0];
    ALL_LANGUAGES.splice(ALL_LANGUAGES.indexOf(currentLanguage), 1);
    ALL_LANGUAGES.unshift(currentLanguage);

    return ALL_LANGUAGES;
  }, [lang]);
  const isMobile = useMobile();

  const linkIdx = 0;

  if (isMobile) {
    return <div />;
  }

  return (
    <div className={styles.lang_wrapper}>
      {languages.map((lang: ELANGUAGES) => (
        <Link
          key={lang}
          href={getLink(asPath, linkIdx, lang)}
          className={styles.lang}
          aria-label={lang}
        >
          <Icon name={lang} />
        </Link>
      ))}
    </div>
  );
}
