import Link from "next/link";
import { ELANGUAGES } from "../../models/languages";
import getLink from "../../utils/getLink";
import styles from "./LanguagesSelect.module.css";
import Icon from "../Icon/Icon";

interface ILangSelect {
  lang: ELANGUAGES;
  asPath: string;
}

export default function LanguagesSelect({ lang, asPath }: ILangSelect) {
  const ALL_LANGUAGES = [ELANGUAGES.EN, ELANGUAGES.RU, ELANGUAGES.HY];

  const languages = [lang, ...ALL_LANGUAGES.filter((el) => el !== lang)];

  document.documentElement.setAttribute("lang", lang);

  const linkIdx = 0;

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
