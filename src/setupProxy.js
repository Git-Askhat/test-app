const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'https://message-send-app.herokuapp.com',
      changeOrigin: true,
    })
  );
};