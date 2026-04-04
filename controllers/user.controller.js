const Usermodel  = require("../models/user.js");
const mongoose = require("mongoose");
const Tokenmodel = require("../models/token.js");


const user = async (req, res, next) => {

        const { username, age, symptoms } = req.body;

        // Create user
        const infoOfUser = await Usermodel.create({
            username,
            age,
            symptoms
        });


        const lastToken = await Tokenmodel.findOne().sort({Token: -1})

        const GenToken = lastToken ? lastToken.Token + 1 : 1

        const Token = await Tokenmodel.create({
            Token: GenToken,
            UserId: infoOfUser._id
        })


    return res.status(201).json({
        message: "Your Token",
        Token: Token,
        User: infoOfUser
    })
}

module.exports = {
    user
}