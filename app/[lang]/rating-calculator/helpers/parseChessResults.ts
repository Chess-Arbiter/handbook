import { TResult } from "../../../../models/ratingCalculator";

export function parseChessResultsHtml(
  html: string
): { playerRating: number; opponents: { rating: number; result: TResult }[] } | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  let playerRating: number | null = null;
  let resultsTable: Element | null = null;

  for (const table of Array.from(doc.querySelectorAll("table"))) {
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

    if (table.querySelector("th.CRr")) {
      resultsTable = table;
    }
  }

  if (playerRating === null || !resultsTable) {
    return null;
  };

  const opponents: { rating: number; result: TResult }[] = [];

  for (const row of Array.from(resultsTable.querySelectorAll("tr"))) {
    const ratingCell = row.querySelector("td.CRr");
    if (!ratingCell) {
      continue;
    };

    const opponentRating = parseFloat(ratingCell.textContent?.trim() ?? "");
    if (isNaN(opponentRating) || opponentRating <= 0) {
      continue;
    };

    const directCells = row.querySelectorAll(":scope > td");
    const lastCell = directCells[directCells.length - 1];
    const nestedTds = lastCell?.querySelectorAll("td");
    const scoreText =
      nestedTds?.[nestedTds.length - 1]?.textContent?.trim() ?? "";

    let result: TResult;
    switch (scoreText) {
      case "1":
        result = "win";
        break;
      case "0":
        result = "lose";
        break;
      case "½":
      case "1/2":
        result = "draw";
        break;
      default:
        continue;
    }

    opponents.push({ rating: opponentRating, result });
  }

  if (opponents.length === 0) {
    return null
  };
  return { playerRating, opponents };
}
