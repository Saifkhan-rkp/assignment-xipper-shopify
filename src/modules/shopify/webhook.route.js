const { redirect, orderCreate, orderUpdate, createCustomer, updateCustomer } = require('./webhook.controller');

const router = require('express').Router();

// Order
router.post("/create-order", orderCreate);
router.post("/update-order", orderUpdate);
router.post("/order/cancellation", orderUpdate);
router.post("/order/fulfillment", redirect);

//customer
router.post("/customer/create", createCustomer);
router.post("/customer/update", updateCustomer);


module.exports = router