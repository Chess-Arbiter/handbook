import styles from "../rating-calculator.module.css";

interface IProps {
  ratingChange: number;
  newRating: number;
  labels: {
    ratingChange: string;
    newRating: string;
  };
}

export default function RatingResult({ ratingChange, newRating, labels }: IProps) {
  return (
    <div className={styles.result}>
      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>{labels.ratingChange}</span>
        <span
          className={`${styles.resultValue} ${
            ratingChange > 0
              ? styles.positive
              : ratingChange < 0
              ? styles.negative
              : styles.neutral
          }`}
        >
          {ratingChange > 0 ? "+" : ""}
          {ratingChange}
        </span>
      </div>
      <div className={styles.resultRow}>
        <span className={styles.resultLabel}>{labels.newRating}</span>
        <span className={styles.resultValue}>{newRating}</span>
      </div>
    </div>
  );
}
