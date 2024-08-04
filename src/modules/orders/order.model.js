const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
    first_name: { type: String, },
    address1: { type: String, },
    phone: { type: String, },
    city: { type: String, },
    zip: { type: String, },
    province: { type: String, },
    country: { type: String, },
    last_name: { type: String, },
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
    order_id: { type: Number, unique: true },
    order_number: Number,
    confirmed:Boolean,
    created_at: Date,
    updated_at: Date,

    //price related
    currency: String,
    total_price: Number,
    subtotal_price: Number,
    total_discounts: Number,
    totalShippingPrice: Number,
    total_tax: Number,

    financial_status: String,
    fulfillment_status: String,

    //cancellation
    cancel_reason:String,
    cancelled_at:Date,

    //customer details
    customer:{
        first_name:String,
        last_name:String,
        email:String,
        id:Number
    },

    fulfillments:[],
    billing_address: addressSchema,
    shipping_address: addressSchema,
    line_items: [lineItemSchema],
    shipping_lines: [shippingLineSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model("Orders", OrderSchema);