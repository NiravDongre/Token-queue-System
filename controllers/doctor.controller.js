const jwt = require("jsonwebtoken");
const Doctormodel = require("../models/doctor");
const Tokenmodel = require("../models/token");
const bcrypt = require("bcrypt")
const ProtectedSign = require("../schema/schema")
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const signup = async(req, res, next) => {

    const doctorme = req.body;
    const protectedsignup = ProtectedSign.safeParse(doctorme)

    if(!protectedsignup.success){
        return res.json({message: "Incorrect Credintials"})
    }

    const { email, username, password } = req.body
    
    const existedemail = await Doctormodel.findOne({
        email: email
    })

    if(existedemail){
        return res.json("This is email is already registored try going through Sign In page")
    }

    const hashedpassword = bcrypt.hash(10, password)

    await Doctormodel.create({
        email,
        username,
        password: hashedpassword
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