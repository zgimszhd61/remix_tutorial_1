import { createRequestHandler } from "@remix-run/express";
import express from "express";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

// notice that the result of `remix vite:build` is "just a module"
// import * as build from "./build/server/index.js";

const app = express();
app.use(
  viteDevServer? viteDevServer.middlewares : express.static("build/client")
);
//app.use(express.static("build/client"));

const build = viteDevServer? () => viteDevServer.ssrLoadModule("virtual:remix/server-build") : await import("./build/server/index.js");

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
