const express = require("express");
const UserRoute = express.Router()
const { user } = require("../controllers/user.controller");
const { TokenMiddleware } = require("../middleware/token.middlewarer");

UserRoute.post("/Form", user)

module.exports = {
    UserRoute
}