const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profilePic: {
      type: String,
      trim: true,
      default: "default", 
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
