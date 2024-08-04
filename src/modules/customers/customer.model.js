const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer_id: { type: Number, },
  email: { type: String, unique:true },
  created_at: { type: Date,  },
  updated_at: { type: Date,  },
  first_name: { type: String,  },
  last_name: { type: String,  },
  orders_count: { type: Number,  },
  state: { type: String,  },
  total_spent: { type: String,  },
  last_order_id: { type: Number, default: null },
  note: { type: String, default: null },
  verified_email: { type: Boolean,  },
  multipass_identifier: { type: String, default: null },
  tax_exempt: { type: Boolean,  },
  tags: { type: String, default: null },
  last_order_name: { type: String, default: null },
  currency: { type: String,  },
  phone: { type: String, default: null },
  addresses: { type: [Object], default: [] },
  tax_exemptions: { type: [String], default: [] },
  email_marketing_consent: { type: Object, default: null },
  sms_marketing_consent: { type: Object, default: null },
  admin_graphql_api_id: { type: String,  }
}, {
  timestamps: true
});




module.exports = mongoose.model("Customers", customerSchema);