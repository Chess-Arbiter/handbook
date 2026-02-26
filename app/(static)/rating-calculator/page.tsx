import { siteTitle } from "../../../constants/titles";
import RatingCalculator from "./RatingCalculator";

export const metadata = {
  title: `Rating Calculator | ${siteTitle}`,
  description: "Calculate your new Elo rating based on your game results.",
};

export default function RatingCalculatorPage() {
  return (
    <>
      <h1>Rating Calculator</h1>
      <RatingCalculator />
    </>
  );
}
