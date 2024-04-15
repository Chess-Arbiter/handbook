import { Theme } from "../constants/global";

export function getTheme(): string {
  const urlParams = new window.URLSearchParams(window.location.search);

  if (urlParams.get("mobile") === "true") {
    let theme = Theme.LIGHT;

    if (urlParams.get("theme") === Theme.DARK) {
      theme = Theme.DARK;
    }

    return theme;
  }

  const theme = window.localStorage.getItem("theme");

  return theme || Theme.LIGHT;
}

export function guessTheme() {
  const theme = getTheme();

  document.documentElement.setAttribute("data-theme", theme);
}

export function toggleTheme(): string {
  const theme = getTheme();
  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  return newTheme;
}
