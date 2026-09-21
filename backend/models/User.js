const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "لطفاً نام و نام خانوادگی را وارد کنید"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "لطفا شماره تلفن خود را وارد  کنید"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "لطفاً رمز عبور را وارد کنید"],
      minlength: [8, "رمز عبور باید حداقل 8 کاراکتر باشد"],
    },
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
module.exports = User;
