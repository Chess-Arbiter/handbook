"use client";

import { useState } from "react";
import styles from "./rating-calculator.module.css";

type Result = "win" | "draw" | "lose";

interface Opponent {
  id: number;
  rating: string;
  result: Result;
}

const SCORE: Record<Result, number> = { win: 1, draw: 0.5, lose: 0 };

function expectedScore(ra: number, rb: number): number {
  return 1 / (1 + Math.pow(10, (rb - ra) / 400));
}

let nextId = 1;

export default function RatingCalculator() {
  const [myRating, setMyRating] = useState("");
  const [kValue, setKValue] = useState<10 | 20 | 40>(40);
  const [opponents, setOpponents] = useState<Opponent[]>([
    { id: nextId++, rating: "", result: "win" },
  ]);

  const addOpponent = () => {
    setOpponents((prev) => [
      ...prev,
      { id: nextId++, rating: "", result: "win" },
    ]);
  };

  const removeOpponent = (id: number) => {
    setOpponents((prev) => prev.filter((o) => o.id !== id));
  };

  const updateOpponent = (id: number, field: keyof Omit<Opponent, "id">, value: string) => {
    setOpponents((prev) =>
      prev.map((o) => (o.id === id ? { ...o, [field]: value } : o))
    );
  };

  const ra = parseFloat(myRating);
  const validOpponents = opponents.filter((o) => o.rating !== "" && !isNaN(parseFloat(o.rating)));
  const canCalculate = !isNaN(ra) && myRating !== "" && validOpponents.length > 0;

  let ratingChange: number | null = null;
  let newRating: number | null = null;

  if (canCalculate) {
    let totalEA = 0;
    let totalSA = 0;

    for (const opponent of validOpponents) {
      const rb = parseFloat(opponent.rating);
      totalEA += expectedScore(ra, rb);
      totalSA += SCORE[opponent.result];
    }
    
    ratingChange = Math.round(kValue * (totalSA - totalEA));
    newRating = ra + ratingChange;
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="my-rating">
          Your rating
        </label>
        <input
          id="my-rating"
          className={styles.input}
          type="number"
          placeholder="e.g. 1500"
          value={myRating}
          onChange={(e) => setMyRating(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="k-value">
          K value
        </label>
        <select
          id="k-value"
          className={styles.select}
          value={kValue}
          onChange={(e) => setKValue(Number(e.target.value) as 10 | 20 | 40)}
        >
          <option value={40}>40</option>
          <option value={20}>20</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div className={styles.opponentsHeader}>
        <h2 className={styles.sectionTitle}>Opponents</h2>
        <button className={styles.addButton} onClick={addOpponent} type="button">
          +
        </button>
      </div>

      <div className={styles.opponentsList}>
        {opponents.map((o, index) => (
          <div key={o.id} className={styles.opponentRow}>
            <span className={styles.opponentIndex}>{index + 1}.</span>
            <input
              className={styles.input}
              type="number"
              placeholder="Opponent rating"
              value={o.rating}
              onChange={(e) => updateOpponent(o.id, "rating", e.target.value)}
            />
            <select
              className={styles.select}
              value={o.result}
              onChange={(e) => updateOpponent(o.id, "result", e.target.value as Result)}
            >
              <option value="win">Win</option>
              <option value="draw">Draw</option>
              <option value="lose">Lose</option>
            </select>
            {opponents.length > 1 && (
              <button
                className={styles.removeButton}
                onClick={() => removeOpponent(o.id)}
                type="button"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {canCalculate && ratingChange !== null && newRating !== null && (
        <div className={styles.result}>
          <div className={styles.resultRow}>
            <span className={styles.resultLabel}>Rating change</span>
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
            <span className={styles.resultLabel}>New rating</span>
            <span className={styles.resultValue}>{newRating}</span>
          </div>
        </div>
      )}
    </div>
  );
}
