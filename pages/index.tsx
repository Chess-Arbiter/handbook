import { NextPageContext } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { res } = context;
  res?.writeHead(302, {
    Location: "/en/basic/rating_elo",
  });
  res?.end();

  return { props: {} };
};
