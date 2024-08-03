const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
    firstName: { type: String, },
    address1: { type: String, },
    phone: { type: String, },
    city: { type: String, },
    zip: { type: String, },
    province: { type: String, },
    country: { type: String, },
    lastName: { type: String, },
    address2: { type: String, default: null },
    company: { type: String, default: null },
    latitude: { type: Number, default: null },
    longitude: { type: Number, default: null },
    name: { type: String, },
    countryCode: { type: String, },
    provinceCode: { type: String, }
});

const lineItemSchema = new mongoose.Schema({
    name: String,
    sku: String,
    quantity: Number,
    price: Number,
    product_id: Number,
});

const shippingLineSchema = new mongoose.Schema({
    title: String,
    price: Number,
    source: String,
    phone: { type: String, default: null },
    discounted_price: { type: Number },
    code: { type: Number, default: null }
});

const OrderSchema = new mongoose.Schema({
    orderId: { type: Number, unique: true },
    orderNumber: Number,
    orderStatus: String,
    orderDate: Date,
    currency: String,
    totalPrice: Number,
    subtotalPrice: Number,
    totalDiscounts: Number,
    totalShippingPrice: Number,
    totalTax: Number,
    financialStatus: String,
    fulfillmentStatus: String,
    customerId: Number,
    customerName: String,
    customerEmail: String,
    customerLocale: String,
    billingAddress: addressSchema,
    shippingAddress: addressSchema,
    lineItems: [lineItemSchema],
    shippingLines: [shippingLineSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model("Orders", OrderSchema);