"use client";

import { useEffect } from "react";
import GithubLink from "../components/GithubLink/GithubLink";
import { guessTheme } from "../utils/theme";
import { CSPostHogProvider } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window?.localStorage) {
      guessTheme();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <CSPostHogProvider>
        <body>
          <GithubLink />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
