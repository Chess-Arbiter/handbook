import Link from "next/link";
import { useEffect } from "react";
import "../../styles/theme.css";
import styles from "./Error.module.css";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error_container}>
      <h1>King in Check! Something Went Wrong</h1>
      <p>
        We've encountered an error. Perhaps a move that wasn't part of the plan?
        Try the following:
      </p>
      <ul>
        <li>Refresh the page or retry your last move.</li>
        <li>
          Ensure your internet connection is as strong as a pawn structure.
        </li>
        <li>
          If you're still stuck, it might be time to consult the grandmasters of
          our support team.
        </li>
      </ul>
      <Link href="/">Return to the Game</Link>
    </div>
  );
}
