const catchAsync = require('../../utils/catchAsync');
const { getCustomers } = require('./customer.service');

const router = require('express').Router();

router.get("/get/page/:page", catchAsync(async (req, res) => {
    const { page } = req.params;
    const result = await getCustomers({ page, pageSize:10 });
    res.status(200).send(result);
}))


module.exports = router