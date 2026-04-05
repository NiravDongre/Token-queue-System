const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../controllers/doctor.controller");
const CustomError = require("../utils/CustomError");

const DoctorMiddleware = async(req, res, next) => {

    try{
    const token = req.headers.token;

    if(!token){
        return res.status(404).json({
            message: "No token or token is empty"
        })
    }

    const response = jwt.verify(token, JWT_SECRET_KEY)

    if(response){
       req.useid = response.useid
    }
    next()
    
    }catch(e){
        next(new CustomError("Something went wrong", 400))
    }

}

module.exports = {
    DoctorMiddleware
}