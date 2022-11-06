import { ReactNode } from "react";

import { applyMirage } from "../utils/applyMirage";
import "./i18n";

import "../../styles/globals.css";

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
