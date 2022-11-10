import { createServer } from "miragejs";

const applyMirage = () => {
  createServer({
    routes() {
      this.get("http://localhost:3000/api/footer/links", () => [
        "thewitcher.com",
        "playgwent.com",
        "eu.gear.cdprojektred.com",
      ]);

      this.passthrough("/_next/static/development/_devMiddlewareManifest.json");
    },
  });
};

export { applyMirage };
