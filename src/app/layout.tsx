import { createServer } from "miragejs";
import { ReactNode } from "react";
import "./i18n";

import "../../styles/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  createServer({
    routes() {
      this.get("/api/footer/links", () => [
        "thewitcher.com",
        "playgwent.com",
        "eu.gear.cdprojektred.com",
      ]);

      this.passthrough("/_next/static/development/_devMiddlewareManifest.json");
    },
  });

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
