import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { createServer } from "miragejs";

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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
