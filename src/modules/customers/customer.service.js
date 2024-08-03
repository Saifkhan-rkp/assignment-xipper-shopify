const Customer = require("./customer.model")


const createCustomer = async (payload) => {
    const result = await Customer.create(payload);
    return result;
}


const updateCustomer = async (payload) => {
    const result = await Customer.updateOne({ customerId: payload.customerId }, payload)
}

const getCustomers = async ({ page = 1, pageSize = 10 }) => {
    const customersToSkip = (page - 1) * pageSize
    const result = await Customer.find({})
        .skip(customersToSkip)
        .limit(pageSize);
    return result || [];
}

const getCustomer = async (payload) => {
    const result = await Customer.findOne(payload);
    return result;
}


module.exports = { getCustomer, getCustomers, createCustomer, updateCustomer }