import RoundTable from "./RoundTable/RoundTable";

const contents: any = {
  round_system: <RoundTable />,
};

export default function AdditionalContents({ page }: any) {
  return contents[page] || null;
}
