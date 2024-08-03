const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  id: { type: Number, },
  email: { type: String, },
  firstName: { type: String, },
  lastName: { type: String, },
  ordersCount: { type: Number, },
  state: { type: String, },
  totalSpent: { type: String, },
  lastOrderId: { type: Number, default: null },
  note: { type: String, default: null },
  verifiedEmail: { type: Boolean, },
  multipassIdentifier: { type: String, default: null },
  taxExempt: { type: Boolean, },
  tags: { type: String, default: null },
  lastOrderName: { type: String, default: null },
  currency: { type: String, },
  phone: { type: String, default: null },
  addresses: { type: [String], default: [] },
  taxExemptions: { type: [String], default: [] },
  emailMarketingConsent: { type: String, default: null },
  smsMarketingConsent: { type: String, default: null },
  adminGraphqlApiId: { type: String, }
},{
    timestamps:true
});




module.exports = mongoose.model("Customers", customerSchema);