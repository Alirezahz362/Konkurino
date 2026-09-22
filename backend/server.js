const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("سلام! سرور کنکورینو با موفقست روشن شد");
});
app.post("/login", (req, res) => {
  const { phone, password } = req.body;
  res.send(`شماره${phone}با موفقیت دریافت شد!`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
