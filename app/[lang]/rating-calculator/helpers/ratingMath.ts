import { IOpponent, TResult } from "../../../../models/ratingCalculator";

export const SCORE: Record<TResult, number> = { win: 1, draw: 0.5, lose: 0 };

export function expectedScore(ra: number, rb: number): number {
  return 1 / (1 + Math.pow(10, (rb - ra) / 400));
}

export function getGameChange(
  opponent: IOpponent,
  ra: number,
  kValue: number
): number | null {
  const rb = parseFloat(opponent.rating);
  if (isNaN(ra) || isNaN(rb) || rb <= 0) {
    return null;
  }

  return Math.round(kValue * (SCORE[opponent.result] - expectedScore(ra, rb)));
}
