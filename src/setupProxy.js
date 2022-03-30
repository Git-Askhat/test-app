const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://message-send.herokuapp.com',
      changeOrigin: true,
    })
  );
};