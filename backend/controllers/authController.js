const User = require("./models/User");

const registerUser = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res
        .status(400)
        .json({ message: " شماره موبایل ورمز عبور را وارد کنید" });
    }
    const userExists = await User.findOne({ phone });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "این شماره تلفن قبلا ثبت نام کرده است" });
    }
    const user = await User.create({
      phone,
      password,
    });
    res.status(201).json({
        message:'ثبت نام با موفقیت انجام شد',
        user:{
            id:user._id,
            phone:user.phone,
            role:user.role,
        }
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطای سرور در ثبت‌نام", error: error.message });
  }
};
module.exports = {registerUser};