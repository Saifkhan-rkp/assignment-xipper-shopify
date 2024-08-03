const redirect = require('./webhook.controller');

const router = require('express').Router();

router.post("/webhook/create-order", redirect)
router.post("/webhook/update-order", redirect)

module.exports = router