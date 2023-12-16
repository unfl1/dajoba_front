const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://172.31.20.252:8080",
      changeOrigin: true,
    })
  );
};