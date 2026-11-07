const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const prisma = require("./prisma");

const authRoutes = require("./routes/authRoutes");
const courseRouters = require("./routes/courseRoutes");
const categoryRouters = require('./routes/categoryRoutes')

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRouters);
app.use ('/api/categories',categoryRouters)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
