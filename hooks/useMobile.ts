export default function useMobile(): boolean {
  let isMobile = false;

  if (window?.location?.search?.includes("mobile=true")) {
    isMobile = true;
  }

  return isMobile;
}
