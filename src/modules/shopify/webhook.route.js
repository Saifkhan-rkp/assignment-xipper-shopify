const redirect = require('./webhook.controller');

const router = require('express').Router();

// Order
router.post("/create-order", redirect);
router.post("/update-order", redirect);

//customer
router.post("/customer/create", redirect);


module.exports = router