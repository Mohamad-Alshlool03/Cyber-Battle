const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//  استدعاء الراوتات
const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/game");
const scoreRoutes = require("./routes/score");

const app = express();

//  Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//  تفعيل الراوتات
app.use("/api", authRoutes);
app.use("/api", gameRoutes);
app.use("/api", scoreRoutes);

// تشغيل السيرفر 
app.listen(3000, () => {
  console.log("🔥 Server running on http://localhost:3000/login.html");
});