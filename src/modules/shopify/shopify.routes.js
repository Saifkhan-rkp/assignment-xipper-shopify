const router = require('express').Router();
const webhookRouter = require('./webhook.route');

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

router.use(webhookRouter);
module.exports = router;