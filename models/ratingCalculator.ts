export type Translations = {
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

export type Result = "win" | "draw" | "lose";

export interface Opponent {
    id: number;
    rating: string;
    result: Result;
}