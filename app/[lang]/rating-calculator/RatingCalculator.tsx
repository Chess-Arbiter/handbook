"use client";

import { useState } from "react";
import { ELANGUAGES } from "../../../models/languages";
import styles from "./rating-calculator.module.css";
import { Opponent, Result } from "../../../models/ratingCalculator";
import { T } from "../../../constants/ratingCalculator";

const SCORE: Record<Result, number> = { win: 1, draw: 0.5, lose: 0 };

function expectedScore(ra: number, rb: number): number {
  return 1 / (1 + Math.pow(10, (rb - ra) / 400));
}

function parseChessResultsHtml(
  html: string
): { playerRating: number; opponents: { rating: number; result: Result }[] } | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  let playerRating: number | null = null;
  let resultsTable: Element | null = null;

  for (const table of Array.from(doc.querySelectorAll("table"))) {
    // Find player info table by looking for a "Rating" label row
    if (playerRating === null) {
      for (const row of Array.from(table.querySelectorAll("tr"))) {
        const cells = row.querySelectorAll("td");
        if (cells.length >= 2 && cells[0].textContent?.trim() === "Rating") {
          const rating = parseFloat(cells[1].textContent?.trim() ?? "");
          if (!isNaN(rating) && rating > 0) {
            playerRating = rating;
          }
          break;
        }
      }
    }
    // Find results table by looking for the "Rtg" column header
    if (table.querySelector("th.CRr")) {
      resultsTable = table;
    }
  }

  if (playerRating === null || !resultsTable) return null;

  const opponents: { rating: number; result: Result }[] = [];

  for (const row of Array.from(resultsTable.querySelectorAll("tr"))) {
    const ratingCell = row.querySelector("td.CRr");
    if (!ratingCell) continue; // skip header rows

    const opponentRating = parseFloat(ratingCell.textContent?.trim() ?? "");
    if (isNaN(opponentRating) || opponentRating <= 0) continue;

    // Score is in the last <td> of the nested result table
    const directCells = row.querySelectorAll(":scope > td");
    const lastCell = directCells[directCells.length - 1];
    const nestedTds = lastCell?.querySelectorAll("td");
    const scoreText =
      nestedTds?.[nestedTds.length - 1]?.textContent?.trim() ?? "";

    let result: Result;
    if (scoreText === "1") result = "win";
    else if (scoreText === "0") result = "lose";
    else if (scoreText === "½" || scoreText === "1/2") result = "draw";
    else continue; // skip unrecognized results (byes, forfeits)

    opponents.push({ rating: opponentRating, result });
  }

  if (opponents.length === 0) return null;
  return { playerRating, opponents };
}

let nextId = 1;

export default function RatingCalculator({ lang }: { lang: ELANGUAGES }) {
  const t = T[lang] ?? T[ELANGUAGES.EN];

  const [myRating, setMyRating] = useState("");
  const [kValue, setKValue] = useState<10 | 20 | 40>(10);
  const [opponents, setOpponents] = useState<Opponent[]>([
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

      <div className={styles.urlSection}>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="chess-results-url">
            {t.chessResultsUrl}
          </label>
          <input
            id="chess-results-url"
            className={`${styles.input} ${styles.urlInput}`}
            type="url"
            placeholder={t.urlPlaceholder}
            value={chessResultsUrl}
            onChange={(e) => setChessResultsUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && importFromUrl()}
            disabled={isFetching}
          />
          <button
            className={styles.fetchButton}
            onClick={importFromUrl}
            type="button"
            disabled={isFetching || !chessResultsUrl.trim()}
          >
            {isFetching ? t.fetching : t.importFromUrl}
          </button>
        </div>
        {fetchError && <p className={styles.errorMsg}>{fetchError}</p>}
      </div>

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
