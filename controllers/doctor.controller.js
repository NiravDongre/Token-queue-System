const jwt = require("jsonwebtoken");
const Doctormodel = require("../models/doctor");
const Tokenmodel = require("../models/token");
const ProtectedSign = require("../schema/schema")
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const signup = async(req, res, next) => {

    const doctorme = req.body;
    const protectedsignup = ProtectedSign.safeParse(doctorme)

    if(!protectedsignup){
        return res.json({message: "Incorrect Credintials"})
    }

    const InfoOfDoctor = await Doctormodel.create({
        email: email,
        username,
        password: password
    })

    const token = jwt.sign({
        doctor: InfoOfDoctor._id
    }, JWT_SECRET_KEY)

    return res.json({
        token: token
    })

}

const signin = async(req, res, next) => {

}

const doctor = async(req, res, next) => {

    const Allpatient = await Tokenmodel.find();
    return res.json({
        Patients: Allpatient
    })
}


module.exports = {
    signup, doctor, JWT_SECRET_KEY
}