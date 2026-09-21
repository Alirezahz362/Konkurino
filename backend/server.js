const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

connectDB()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("سلام! سرور کنکورینو با موفقست روشن شد");
});
app.post("/login", (req, res) => {
  const { phone, password } = req.body;
  res.send(`شماره${phone}با موفقیت دریافت شد!`);
});

app.listen(5000);
