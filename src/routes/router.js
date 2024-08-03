const router =  require('express').Router();
const shopifyRoutes = require('../modules/shopify/shopify.routes');

router.use(shopifyRoutes);

module.exports = router;