const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctor = new Schema({
    email: String,
    username: String,
    password: String
})

const Doctormodel = mongoose.model("doctor", doctor);

module.exports = Doctormodel