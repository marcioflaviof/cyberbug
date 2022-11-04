import localFont from "@next/font/local";
import "../../styles/globals.css";

import { ReactNode } from "react";
import "./i18n";

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
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
