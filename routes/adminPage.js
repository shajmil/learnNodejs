const express = require("express");

const route = express.Router();

route.get("", (req, res) => {
  res.end("<h1>Hello from admin home</h1>");
});

module.exports = route;
