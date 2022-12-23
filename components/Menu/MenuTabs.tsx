import styles from "./menu.module.css";
import { sideBarTabs } from "../../constants/sidebar";
import Link from "next/link";

export default function MenuTabs({
  lang,
  activeTab,
}: {
  lang: any;
  activeTab: any;
}) {
  return (
    <div className={styles.menu_tabs}>
      {sideBarTabs.map((tab: any) => (
        <Link
          className={`${tab.id === activeTab ? styles.active : ""}`}
          key={tab.path}
          href={`/${lang}/${tab.path}`}
        >
          {tab[`title_${lang}`]}
        </Link>
      ))}
    </div>
  );
}
