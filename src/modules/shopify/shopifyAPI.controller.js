require('@shopify/shopify-api/adapters/node');
const { shopifyApi, ApiVersion, } = require("@shopify/shopify-api");
const { restResources } = require('@shopify/shopify-api/rest/admin/2023-04');
const catchAsync = require("../../utils/catchAsync");
const { createCustomer } = require('../customers/customer.service');


// shopify.apiPermission.delete()

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
    apiVersion: ApiVersion.July24,
    adminApiAccessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
    hostName: "assign-xipper.myshopify.com",
    isCustomStoreApp: true,
    restResources
});

const session = shopify.session.customAppSession("assign-xipper.myshopify.com");

const getOrderDetails = catchAsync(async (req, res) => {
    const { id } = req.params;
    // const client = 
    const order = await shopify.rest.Order.find({session, id});
    // console.log("printing this", order)
    res.send(order);
});

const getCustomerDetails = catchAsync(async (req, res) => {
    const { id } = req.params;
    // const client = 
    const customer = await shopify.rest.Customer.find({session, id});
    // console.log("printing this", customer )
    res.send(customer);
});

module.exports = { getOrderDetails, getCustomerDetails }