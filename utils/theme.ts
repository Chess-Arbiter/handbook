import { Theme } from "../constants/global";

export function getTheme():string {
  const theme = window.localStorage.getItem('theme');
  if(!theme) {
    return Theme.LIGHT
  }
  return theme
}

export function guesTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
}

export function toggleTheme():string {
  const theme = getTheme();
  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  return newTheme;
}
