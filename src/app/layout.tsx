import localFont from "@next/font/local";
import "../../styles/globals.css";

import { ReactNode } from "react";
import "./i18n";

import "../../styles/globals.css";

import { applyMirage } from "../utils/applyMirage";

export const blenderBook = localFont({
  src: "./fonts/BlenderPro-Book.woff2",
  variable: "--blender-book",
});
export const blenderBold = localFont({
  src: "./fonts/BlenderPro-Bold.woff2",
  variable: "--blender-bold",
});

export default function Layout({ children }: { children: ReactNode }) {
  applyMirage();

  return (
    <html lang="en" className={(blenderBold.className, blenderBook.className)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
