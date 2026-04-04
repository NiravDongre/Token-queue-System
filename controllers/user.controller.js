const Usermodel  = require("../models/user.js");
const Tokenmodel = require("../models/token.model.js");
const CustomError = require("../utils/CustomError.js");
const UserValidation = require("../validations/user.validation.js");


const user = async (req, res, next) => {
    try{

        const payload = req.body;

        const createpayload = UserValidation.safeParse(payload);

        if(!createpayload.success){
            next(new CustomError("Incorrect Credintials"))
        }

        const { fullname, age, symptoms } = req.body;

        const infoOfUser = await Usermodel.create({
            fullname,
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
} catch(e){
    next(new CustomError("Token not generated", 400))
}

}

module.exports = {
    user
}