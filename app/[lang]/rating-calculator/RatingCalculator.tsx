"use client";

import { useState } from "react";
import { ELANGUAGES } from "../../../models/languages";
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

type Translations = {
  title: string;
  yourRating: string;
  kValue: string;
  opponents: string;
  opponentRating: string;
  win: string;
  draw: string;
  lose: string;
  ratingChange: string;
  newRating: string;
  ratingPlaceholder: string;
  opponentPlaceholder: string;
};

const T: Record<ELANGUAGES, Translations> = {
  [ELANGUAGES.EN]: {
    title: "Rating Calculator",
    yourRating: "Your rating",
    kValue: "K value",
    opponents: "Opponents",
    opponentRating: "Opponent rating",
    win: "Win",
    draw: "Draw",
    lose: "Lose",
    ratingChange: "Rating change",
    newRating: "New rating",
    ratingPlaceholder: "e.g. 2000",
    opponentPlaceholder: "Opponent rating",
  },
  [ELANGUAGES.RU]: {
    title: "Калькулятор рейтинга",
    yourRating: "Ваш рейтинг",
    kValue: "Значение K",
    opponents: "Соперники",
    opponentRating: "Рейтинг соперника",
    win: "Победа",
    draw: "Ничья",
    lose: "Поражение",
    ratingChange: "Изменение рейтинга",
    newRating: "Новый рейтинг",
    ratingPlaceholder: "напр. 2000",
    opponentPlaceholder: "Рейтинг соперника",
  },
  [ELANGUAGES.HY]: {
    title: "Վարկանիշի հաշվիչ",
    yourRating: "Ձեր վարկանիշը",
    kValue: "K արժեք",
    opponents: "Մրցակիցներ",
    opponentRating: "Մրցակցի վարկանիշ",
    win: "Հաղթանակ",
    draw: "Ոչ ոքի",
    lose: "Պարտություն",
    ratingChange: "Վարկանիշի փոփոխություն",
    newRating: "Նոր վարկանիշ",
    ratingPlaceholder: "Օրինակ՝ 2000",
    opponentPlaceholder: "Մրցակցի վարկանիշ",
  },
};

let nextId = 1;

export default function RatingCalculator({ lang }: { lang: ELANGUAGES }) {
  const t = T[lang] ?? T[ELANGUAGES.EN];

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

  const updateOpponent = (
    id: number,
    field: keyof Omit<Opponent, "id">,
    value: string
  ) => {
    setOpponents((prev) =>
      prev.map((o) => (o.id === id ? { ...o, [field]: value } : o))
    );
  };

  const ra = parseFloat(myRating);
  const validOpponents = opponents.filter(
    (o) => o.rating !== "" && !isNaN(parseFloat(o.rating))
  );
  const canCalculate =
    !isNaN(ra) && myRating !== "" && validOpponents.length > 0;

  let ratingChange: number | null = null;
  let newRating: number | null = null;

  if (canCalculate) {
    let totalEA = 0;
    let totalSA = 0;
    for (const o of validOpponents) {
      const rb = parseFloat(o.rating);
      totalEA += expectedScore(ra, rb);
      totalSA += SCORE[o.result];
    }
    ratingChange = Math.round(kValue * (totalSA - totalEA));
    newRating = ra + ratingChange;
  }

  return (
    <div className={styles.calculator}>
      <h1>{t.title}</h1>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="my-rating">
          {t.yourRating}
        </label>
        <input
          id="my-rating"
          className={styles.input}
          type="number"
          placeholder={t.ratingPlaceholder}
          value={myRating}
          onChange={(e) => setMyRating(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="k-value">
          {t.kValue}
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
        <h2 className={styles.sectionTitle}>{t.opponents}</h2>
        <button
          className={styles.addButton}
          onClick={addOpponent}
          type="button"
        >
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
              placeholder={t.opponentPlaceholder}
              value={o.rating}
              onChange={(e) => updateOpponent(o.id, "rating", e.target.value)}
            />
            <select
              className={styles.select}
              value={o.result}
              onChange={(e) =>
                updateOpponent(o.id, "result", e.target.value as Result)
              }
            >
              <option value="win">{t.win}</option>
              <option value="draw">{t.draw}</option>
              <option value="lose">{t.lose}</option>
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
            <span className={styles.resultLabel}>{t.ratingChange}</span>
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
            <span className={styles.resultLabel}>{t.newRating}</span>
            <span className={styles.resultValue}>{newRating}</span>
          </div>
        </div>
      )}
    </div>
  );
}
