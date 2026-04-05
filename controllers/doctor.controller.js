const jwt = require("jsonwebtoken");
const Doctormodel = require("../models/doctor");
const Tokenmodel = require("../models/token");
const bcrypt = require("bcrypt")
const { ProtectedSign, ProtectedAuth } = require("../validations/doctor.validation");
const CustomError = require("../utils/CustomError");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


const signup = async(req, res, next) => {

    try{
    const doctorme = req.body;
    const protectedsignup = ProtectedSign.safeParse(doctorme)

    if(!protectedsignup.success){
        const err = new CustomError("Incorrect Credintial", 422)
        next(err)
    }

    const { email, username, password } = req.body
    
    const existedemail = await Doctormodel.findOne({
        email: email
    })

    if(existedemail){
        const err = new CustomError("The ema is already registored", 409)
        next(err)
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
    } catch(error){
        const err = new CustomError("Incorrect Credintial", 400)
        next(err)
    }
}

const signin = async(req, res, next) => {
 try{
    const doctorme = req.body;
    const protectedsignin = ProtectedAuth.safeParse(doctorme)

    if(!protectedsignin.success){
        const err = new CustomError("Incorrect Credintial", 422)
        next(err)
    }

    const { username, password } = req.body
    

    const Matchpassword = bcrypt.compare(password)

    const thepassword = await Doctormodel.findOne({
        username: username,
        password: Matchpassword
    })

    if(!thepassword){
        next(new CustomError("Pls Put Correct Password", ))
    }

    const token = jwt.sign({
        doctor: InfoOfDoctor._id
    }, JWT_SECRET_KEY)

    return res.json({
        message: "Signed In",
        token: token
    })
    } catch(error){
        const err = new CustomError("Incorrect Credintial", 400)
        next(err)
    }
}

const doctor = async(req, res, next) => {
    try{
    const Allpatient = await Tokenmodel.find();
    return res.json({
        Patients: Allpatient
    })
    } catch(e){
        const err = new CustomError("Not Found", 404)
    }

}


module.exports = {
    signup, signin, doctor
}