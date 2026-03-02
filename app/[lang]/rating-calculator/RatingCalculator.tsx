"use client";

import { useState } from "react";
import { ELANGUAGES } from "../../../models/languages";
import styles from "./rating-calculator.module.css";
import { IOpponent } from "../../../models/ratingCalculator";
import { T } from "../../../constants/ratingCalculator";
import { parseChessResultsHtml } from "./helpers/parseChessResults";
import { expectedScore, SCORE } from "./helpers/ratingMath";
import UrlImportSection from "./components/UrlImportSection";
import OpponentRow from "./components/OpponentRow";
import RatingResult from "./components/RatingResult";

let nextId = 1;

export default function RatingCalculator({ lang }: { lang: ELANGUAGES }) {
  const t = T[lang] ?? T[ELANGUAGES.EN];

  const [myRating, setMyRating] = useState("");
  const [kValue, setKValue] = useState<10 | 20 | 40>(10);
  const [opponents, setOpponents] = useState<IOpponent[]>([
    { id: nextId++, rating: "", result: "win" },
  ]);

  const [chessResultsUrl, setChessResultsUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const importFromUrl = async () => {
    if (!chessResultsUrl.trim()) return;

    setIsFetching(true);
    setFetchError("");

    try {
      const res = await fetch(
        `/api/chess-results?url=${encodeURIComponent(chessResultsUrl)}`
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFetchError((data as { error?: string }).error ?? t.fetchError);
        return;
      }

      const html = await res.text();
      const parsed = parseChessResultsHtml(html);

      if (!parsed) {
        setFetchError(t.fetchError);
        return;
      }

      setMyRating(String(parsed.playerRating));
      setOpponents(
        parsed.opponents.map((o) => ({
          id: nextId++,
          rating: String(o.rating),
          result: o.result,
        }))
      );
    } catch {
      setFetchError(t.fetchError);
    } finally {
      setIsFetching(false);
    }
  };

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
    field: keyof Omit<IOpponent, "id">,
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

      <UrlImportSection
        url={chessResultsUrl}
        onUrlChange={setChessResultsUrl}
        onImport={importFromUrl}
        isFetching={isFetching}
        error={fetchError}
        labels={{
          chessResultsUrl: t.chessResultsUrl,
          importFromUrl: t.importFromUrl,
          fetching: t.fetching,
          urlPlaceholder: t.urlPlaceholder,
        }}
      />

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
          <OpponentRow
            key={o.id}
            opponent={o}
            index={index}
            showRemove={opponents.length > 1}
            onUpdate={updateOpponent}
            onRemove={removeOpponent}
            labels={{
              opponentPlaceholder: t.opponentPlaceholder,
              win: t.win,
              draw: t.draw,
              lose: t.lose,
            }}
          />
        ))}
      </div>

      {canCalculate && ratingChange !== null && newRating !== null && (
        <RatingResult
          ratingChange={ratingChange}
          newRating={newRating}
          labels={{
            ratingChange: t.ratingChange,
            newRating: t.newRating,
          }}
        />
      )}
    </div>
  );
}
