import RatingCalculator from "./RatingCalculator";
import { siteTitle } from "../../../constants/titles";
import { ELANGUAGES } from "../../../models/languages";

const metaDataByLang = {
  [ELANGUAGES.EN]: {
    title: `Rating calculator | ${siteTitle}`,
    description: "Calculate your new Elo rating based on your game results.",
  },
  [ELANGUAGES.RU]: {
    title: `Калькулятор рейтинга | ${siteTitle}`,
    description: "Рассчитайте свой новый рейтинг Эло на основе результатов ваших игр.",
  },
  [ELANGUAGES.HY]: {
    title: `Վարկանիշի հաշվիչ | ${siteTitle}`,
    description: "Հաշվեք ձեր նոր Էլո վարկանիշը ձեր խաղերի արդյունքների հիման վրա։",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: ELANGUAGES }>;
}) {
  const { lang } = await params;

  return metaDataByLang[lang]
}

export default async function RatingCalculatorPage({
  params,
}: {
  params: Promise<{ lang: ELANGUAGES }>;
}) {
  const { lang } = await params;
  return <RatingCalculator lang={lang} />;
}
