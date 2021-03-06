import babelPolyfill from "babel-polyfill";
import koa from "koa";
import koaProxy from "koa-proxy";
import koaStatic from "koa-static";
import compressor from "koa-compressor";
import React from "react";
import ReactDOM from "react-dom/server";
import * as ReactRouter from "react-router";
import Transmit from "react-transmit";
import Helmet from "react-helmet";

import routesContainer from "containers/routes";

try {
  const app      = koa();
  const hostname = process.env.HOSTNAME || "localhost";
  const port     = process.env.PORT || 8000;
  let   routes   = routesContainer;

  app.use(compressor());

  app.use(koaStatic("static"));

  app.use(function *(next) {
    yield ((callback) => {
      const webserver = __PRODUCTION__ ? "" : `//${this.hostname}:8080`;
      const location  = this.path;
      const styleTag  = __PRODUCTION__ ? `<link rel="stylesheet" type="text/css" href="${webserver}/dist/app.css" />` : "";

      ReactRouter.match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
          return;
        }

        if (error || !renderProps) {
          callback(error);
          return;
        }

        Transmit.renderToString(ReactRouter.RouterContext, renderProps).then(({reactString, reactData}) => {
          let head = Helmet.rewind();
          let template = (
            `<!doctype html>
            <html lang="en-us">
              <head>
                <meta charset="utf-8">
                ${head.title.toString()}
                ${head.meta.toString()}
                <link rel="shortcut icon" href="/favicon.ico">
                ${styleTag}
              </head>
              <body>
                <div id="react-root">${reactString}</div>
              </body>
            </html>`
          );

          this.type = "text/html";
          this.body = Transmit.injectIntoMarkup(template, reactData, [`${webserver}/dist/client.js`]);

          callback(null);
        });
      });
    });
  });

  app.listen(port, () => {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to http://%s:%s", hostname, port);
  });

  if (__DEV__) {
    if (module.hot) {
      console.log("[HMR] Waiting for server-side updates");

      module.hot.accept("containers/routes", () => {
        routes = require("containers/routes");
      });

      module.hot.addStatusHandler((status) => {
        if (status === "abort") {
          setTimeout(() => process.exit(0), 0);
        }
      });
    }
  }
}
catch (error) {
  console.error(error.stack || error);
}
