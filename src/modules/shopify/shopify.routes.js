const router = require('express').Router();
const { getOrderDetails, getCustomerDetails } = require('./shopifyAPI.controller');
const webhookRouter = require('./webhook.route');

// ngrok http --domain=obviously-known-sheepdog.ngrok-free.app 80

router.get("/shopify/order/:id", getOrderDetails);
router.get("/shopify/customer/:id", getCustomerDetails);

router.get("/shopify/test/:data", (req, res) => {
    try {
        const data = req.params.data;
        console.log(JSON.parse(atob(data)))
        res.send(JSON.parse(atob(data)))

    } catch (error) {
        console.log(error)
        res.status(500).send("ERRor")
    }
});

router.use("/shopify-wh", webhookRouter);
module.exports = router;