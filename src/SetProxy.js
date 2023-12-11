const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "http://192.168.0.211:8080/",
      changeOrigin: true,
    })
  );
};