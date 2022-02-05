const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/userPage");
const adminRoute = require("./routes/adminPage");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  console.log("Hello from middle ware");
  next();
});

app.use("/", userRoute);
app.use("/admin", adminRoute);

app.listen(9000, () => {
  console.log("server is running");
});
