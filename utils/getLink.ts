export default function getLink(
  currentPath: string,
  index: number,
  changeParam: string
) {
  const pathArr = currentPath.split("/");
  pathArr.shift();
  pathArr[index] = changeParam;

  return `/${pathArr.join("/")}`;
}
