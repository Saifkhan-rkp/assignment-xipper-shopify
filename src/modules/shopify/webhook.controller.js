const catchAsync = require("../../utils/catchAsync");
const OrderService = require('../orders/order.service');
const CustomerService = require('../customers/customer.service');

const redirect = (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send("Data recieved!")
    } catch (error) {
        res.status(500).send({ message: error?.message || "Internal Server Error" });
    }
}

// order related

const orderCreate = catchAsync(async (req, res) => {
    const order = req.body;
    order.orderId = order.id
    const result = await OrderService.createOrder(order);
    console.log("Order created -> ", result?._id);
    res.send("Order Created");
})


const orderUpdate = catchAsync(async (req, res) => {
    const order = req.body;
    // console.log(order);
    const result = await OrderService.updateOrder(order);
    console.log("Order Update -> ", result.modifiedCount);
    res.send(`Order Updated status -> ${result.modifiedCount>0}`);
});



// customer related

const createCustomer = catchAsync(async (req, res)=>{
    const customer = req.body;
    const result = await CustomerService.createCustomer(customer);
    console.log("customer created -> ", result?._id);
    res.send("customer data recieved");
});

const updateCustomer = catchAsync(async (req, res) => {
    const customer = req.body;
    const result = await CustomerService.updateCustomer(customer); 
    console.log("customer Update -> ", result.modifiedCount);
    res.send(`customer Updated status -> ${result.modifiedCount>0}`);
})

module.exports = { redirect, orderCreate, orderUpdate, createCustomer, updateCustomer };