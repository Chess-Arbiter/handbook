import Icon from "../Icon/Icon";
import styles from "./SidebarFooter.module.css";
export default function SidebarFooter() {
  return (
    <footer className={`sidebar__footer ${styles.footer}`}>
      <div className={styles.lang_wrapper}>
        <a className={styles.lang}>
          <Icon name="arm" />
        </a>
        <a className={styles.lang}>
          <Icon name="ru" />
        </a>
        <a className={styles.lang}>
          <Icon name="en" />
        </a>
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
