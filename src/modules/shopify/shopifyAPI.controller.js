// require('@shopify/shopify-api/adapters/node');
const { shopifyApi, ApiVersion, } = require("@shopify/shopify-api");
const Shopify = require("shopify-api-node");
const catchAsync = require("../../utils/catchAsync");

const shopify = new Shopify({
    apiKey:process.env.SHOPIFY_API_KEY,
    // apiVersion:ApiVersion.July24,
    shopName:"assign-xipper",
    password:process.env.SHOPIFY_ADMIN_ACCESS_TOKEN, 
})

// const shopify = new shopifyApi({
//     apiKey: process.env.SHOPIFY_API_KEY,
//     apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
//     apiVersion: ApiVersion.July24,
//     adminApiAccessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
//     hostName: "https://obviously-known-sheepdog.ngrok-free.app",
//     isCustomStoreApp:true
// });


const getOrderDetails = catchAsync(async (req, res) => {
    const { id } = req.params;
    // const client = 
    const order = await shopify.order.get(id);
    console.log(order)
    res.send(order);
    
});

const getCustomerDetails = catchAsync(async (req, res) => {

});

module.exports = { getOrderDetails, getCustomerDetails }