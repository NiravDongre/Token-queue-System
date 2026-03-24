const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    age:  Number,
    symptoms: String
})

const Usermodel = mongoose.model("user", user);

module.exports = Usermodel
