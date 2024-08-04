const { shopifyApi } = require("@shopify/shopify-api");
const catchAsync = require("../../utils/catchAsync");


// const shopify = new shopifyApi({})

const getOrderDetails = catchAsync(async (req, res) => {

});

const getCustomerDetails = catchAsync(async (req, res) => {

});

module.exports = { getOrderDetails, getCustomerDetails }