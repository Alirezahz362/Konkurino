const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const prisma = require("./prisma");
const authRoutes = require("./routes/authRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("سرور کنکورینو با موفقیت روشن شد! 🚀");
});
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
