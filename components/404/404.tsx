import Link from "next/link";
import "../../styles/theme.css";
import styles from "./404.module.css";

export default function NotFound() {
  return (
    <div className={styles.error_container}>
      <h1>This Page is in Stalemate!</h1>
      <p>
        Looks like you've made a move to an uncharted territory of our
        chessboard.
      </p>
      <ul>
        <li>Double-check the URL - maybe it's a wrong opening!</li>
        <li>Navigate back to safer squares using the menu!</li>
        <li>Or signal a draw and return to our homepage.</li>
      </ul>
      <Link href="/">Return to Home base</Link>
    </div>
  );
}
