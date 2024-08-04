const router =  require('express').Router();
const shopifyRoutes = require('../modules/shopify/shopify.routes');

const routes = [
    {
        path:"/order",
        router: require('../modules/orders/order.route')
    },
    {
        path:"/customer",
        router: require('../modules/customers/customer.route')
    }
]

routes.forEach(route => router.use(route.path, route.router));

router.use(shopifyRoutes);

module.exports = router;