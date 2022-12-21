import type { AppProps } from "next/app";
import "../styles/theme.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { guesTheme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window?.localStorage) {
      guesTheme();
    }
  }, []);

  return <Component {...pageProps} />;
}
