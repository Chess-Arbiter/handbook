export function keepURLSearch(url: string): string {
  const search = window?.location?.search || "";

  return url + search;
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
