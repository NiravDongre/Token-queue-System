const Usermodel  = require("../models/user.js");
const Tokenmodel = require("../models/token.js");
const 


const user = async (req, res, next) => {
    try{
        const { username, age, symptoms } = req.body;

        const infoOfUser = await Usermodel.create({
            username,
            age,
            symptoms
        });

        const lastToken = await Tokenmodel.findOne().sort({Token: -1})

        const GenToken = lastToken ? lastToken.Token + 1 : 1

        const Token = await Tokenmodel.create({
            Token: GenToken,
            UserId: infoOfUser
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