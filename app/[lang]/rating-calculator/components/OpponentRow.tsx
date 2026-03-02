import { IOpponent, TResult } from "../../../../models/ratingCalculator";
import styles from "../rating-calculator.module.css";

interface IProps {
  opponent: IOpponent;
  index: number;
  showRemove: boolean;
  onUpdate: (id: number, field: keyof Omit<IOpponent, "id">, value: string) => void;
  onRemove: (id: number) => void;
  labels: {
    opponentPlaceholder: string;
    win: string;
    draw: string;
    lose: string;
  };
}

export default function OpponentRow({
  opponent,
  index,
  showRemove,
  onUpdate,
  onRemove,
  labels,
}: IProps) {
  return (
    <div className={styles.opponentRow}>
      <span className={styles.opponentIndex}>{index + 1}.</span>
      <input
        className={styles.input}
        type="number"
        placeholder={labels.opponentPlaceholder}
        value={opponent.rating}
        onChange={(e) => onUpdate(opponent.id, "rating", e.target.value)}
      />
      <select
        className={styles.select}
        value={opponent.result}
        onChange={(e) =>
          onUpdate(opponent.id, "result", e.target.value as TResult)
        }
      >
        <option value="win">{labels.win}</option>
        <option value="draw">{labels.draw}</option>
        <option value="lose">{labels.lose}</option>
      </select>
      {showRemove && (
        <button
          className={styles.removeButton}
          onClick={() => onRemove(opponent.id)}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
}
