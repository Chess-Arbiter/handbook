export type TTranslations = {
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
    chessResultsUrl: string;
    importFromUrl: string;
    fetching: string;
    fetchError: string;
    urlPlaceholder: string;
};

export type TResult = "win" | "draw" | "lose";

export interface IOpponent {
    id: number;
    rating: string;
    result: TResult;
}
