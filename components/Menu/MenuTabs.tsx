import Link from "next/link";
import { keepURLSearch } from "../../utils/getLink";
import { sideBarTabs } from "../../constants/sidebar";
import { ELANGUAGES } from "../../models/languages";
import { ITAB } from "../../models/page";
import styles from "./menu.module.css";

export default function MenuTabs({
  lang,
  activeTab,
}: {
  lang: ELANGUAGES;
  activeTab: string;
}) {
  return (
    <div className={styles.menu_tabs}>
      {sideBarTabs.map((tab: ITAB) => (
        <Link
          className={`${tab.id === activeTab ? styles.active : ""}`}
          key={tab.path}
          href={keepURLSearch(`/${lang}/${tab.path}`) as string}
        >
          {tab[`title_${lang}`]}
        </Link>
      ))}
    </div>
  );
}
