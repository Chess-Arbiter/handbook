export default function strtr(str: string, replacement: string[]): string {
  let result = str;
  const matches = str.match(/\$\d+/g);
  
  matches?.forEach((match, index) => {
    result = result.replaceAll(match, replacement[index]);
  });

  return result;
}
