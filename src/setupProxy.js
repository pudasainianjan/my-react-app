const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/random/", {
      target: "http://api.icndb.com/jokes",
      secure: false,
      changeOrigin: true,
    })
  );
};
