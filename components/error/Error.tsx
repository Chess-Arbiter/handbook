import { useEffect } from "react";
import styles from "./Error.module.css";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error_container}>
      <h1>Something went wrong</h1>
      <p>Try to reload page or contact with administrator</p>
    </div>
  );
}
