const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.201.40.39:8080",
      changeOrigin: true,
    })
  );
};