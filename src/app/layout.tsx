import { ReactNode } from "react";
import localFont from "@next/font/local";

import "./i18n";
import "../../styles/globals.css";

const blenderBold = localFont({
  src: "./fonts/BlenderPro-Bold.woff2",
  variable: "--blender-bold",
});

const blenderBook = localFont({
  src: "./fonts/BlenderPro-Book.woff2",
  variable: "--blender-book",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${blenderBook.variable} ${blenderBold.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0;"
        />
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
