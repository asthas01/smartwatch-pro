import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/smartwatch-pro/", // <-- apne repo ka naam dalna h
  build: {
    outDir: "docs", // dist ki jagah docs banega
  },
  clearScreen: false,
  plugins: [
    react(),
    {
      /**
       * DO NOT REMOVE
       * Chariot plugin
       */
      name: "chariot",
      configureServer(server) {
        server.middlewares.use("/@chariot-logger", (req, res) => {
          let body = "";
          req.on("data", (chunk) => (body += chunk));
          req.on("end", () => {
            console.log("Client log:", body); // Logs to stdout
            res.statusCode = 200;
            res.end();
          });
        });
        server.middlewares.use("/@chariot-reload", (_req, res) => {
          server.ws.send({ type: "full-reload", path: "*" });
          res.end("Reload triggered");
        });
      },
    },
  ],
  server: {
    cors: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
});