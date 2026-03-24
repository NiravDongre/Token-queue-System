const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const token = new Schema({
    Token: Number,
    Time: {type: Date, default: Date.now}
})


const Tokenmodel = mongoose.model("tokens", token)

module.exports = Tokenmodel
