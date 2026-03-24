const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../controllers/doctor.controller");

const DoctorMiddleware = async(req, res, next) => {
    const token = req.headers.token;
    const response = jwt.verify(token, JWT_SECRET_KEY)
    if(response){
       req.useid = response.useid
    }
    next()
}

module.exports = {
    DoctorMiddleware
}