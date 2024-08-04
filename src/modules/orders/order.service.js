const Order = require("./order.model")


const createOrder = async (payload) => {
    const result = await Order.create({
        order_id: payload.id,
        ...payload,
    });
    return result;
}


const updateOrder = async (payload) => {
    const result = await Order.updateOne({ order_id: payload.id }, payload);
    return result;
}

const getOrders = async ({ page = 1, pageSize = 10 }) => {
    const ordersToSkip = (page - 1) * pageSize
    const result = await Order.find({})
        .skip(ordersToSkip)
        .limit(pageSize);
    return result || [];
}

const getOrder = async (payload) => {
    const result = await Order.findOne(payload);
    return result;
}

module.exports = { createOrder, getOrder, getOrders, updateOrder }