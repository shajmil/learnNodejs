const express = require("express");
const userPageController = require("./../controllers/userPage");

const route = express.Router();

route.get("", userPageController.userHome);

route.get("/about", userPageController.userAbout);

module.exports = route;
