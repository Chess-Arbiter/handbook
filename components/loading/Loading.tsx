import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading_container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}
