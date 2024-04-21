import RoundTable from "./RoundTable/RoundTable";

const contents: { [key: string]: JSX.Element } = {
  round_system: <RoundTable />,
};

export default function AdditionalContents({ page }: { page: string }) {
  return contents[page] || null;
}
