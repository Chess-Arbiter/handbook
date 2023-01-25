import styles from "./menu.module.css";
import { sideBarTabs } from "../../constants/sidebar";
import Link from "next/link";
import { ELANGUAGES } from "../../models/languages";
import { ITAB } from "../../models/page";
import { keepURLSearch } from "../../utils/getLink";

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
