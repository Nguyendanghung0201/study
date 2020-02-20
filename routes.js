const routes = require('next-routes')();
routes.add("/trade/detail/:id", "/trade/detail/trade_detail")
module.exports = routes;
