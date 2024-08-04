const Customer = require("./customer.model")


const createCustomer = async (payload) => {
    const result = await Customer.create({
        ...payload,
        customer_id: payload.id,
    });
    return result;
}


const updateCustomer = async (payload) => {
    const result = await Customer.updateOne({ customer_id: payload.id }, payload);
    return result;
}

const getCustomers = async ({ page = 1, pageSize = 10 }) => {
    const customersToSkip = (page - 1) * pageSize
    const result = await Customer.find({})
        .skip(customersToSkip)
        .limit(pageSize);
    const totalOrders = await Customer.countDocuments();

    const pages = Math.ceil(totalOrders / pageSize)
    return { pages, customers: result || [] };
}

const getCustomer = async (payload) => {
    const result = await Customer.findOne(payload);
    return result;
}


module.exports = { getCustomer, getCustomers, createCustomer, updateCustomer }