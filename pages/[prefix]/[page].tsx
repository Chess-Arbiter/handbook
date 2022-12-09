import getCities from "../../getPage";

export default function PageContent(param: any) {
  const { prefix, page } = param;
  console.log(page);

  return `${prefix} ${page}`;
}

export async function getServerSideProps({ query: { page } }: any) {
  const pages = await getCities(page);
  console.log(pages.docs);
  return {
    props: {
      page: 1,
    },
  };
}
