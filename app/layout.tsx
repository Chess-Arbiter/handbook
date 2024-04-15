"use client";

import { useEffect } from "react";
import { guessTheme } from "../utils/theme";

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
      <body>{children}</body>
    </html>
  );
}
