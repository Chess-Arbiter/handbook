export function keepURLSearch(url: string): string {
  const seatch = window?.location?.search || "";
  return url + seatch;
}

export default function getLink(
  currentPath: string,
  index: number,
  changeParam: string
) {
  const pathArr = currentPath.split("/");
  pathArr.shift();
  pathArr[index] = changeParam;

  return keepURLSearch(`/${pathArr.join("/")}`);
}
