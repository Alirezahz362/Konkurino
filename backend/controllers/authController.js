const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { fullName, phone, password } = req.body;

    if (!phone || !password || !fullName) {
      return res.status(400).json({
        message: "  نام و نام  خانوداگی ، شماره تلفن ورمز عبور را وارد کنید ",
      });
    }
    const userExists = await User.findOne({ phone });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "این شماره تلفن قبلا ثبت نام کرده است" });
    }
    const user = await User.create({
      fullName,
      phone,
      password,
    });
    res.status(201).json({
      message: "ثبت نام با موفقیت انجام شد",
      user: {
        id: user._id,
        fullName: user.fullName,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطای سرور در ثبت‌نام", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res
        .statuse(400)
        .json({ message: " لطفا شماره تفن و رمز عبور را وارد کنید " });
    }
    const user = await User.findOne({ phone });
    if (!user || user.password !== password) {
      return res
        .statuse(401)
        .json({
          message: " کاربری با این  مشخصات یافت نشد یا رمز عبور اشتباه می باشد",
        });
    }
    res.status(200).json({
      message: " ورود با موفقیت انجام شد",
      user: {
        id: user._id,
        fullName: user.fullName,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطای سرور در ورود به حساب", error: error.message });
  }
};
module.exports = { registerUser, loginUser };