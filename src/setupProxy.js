const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/data", , "/otherApi"], { target: "https://message-send-app.herokuapp.com" })
    );
  };