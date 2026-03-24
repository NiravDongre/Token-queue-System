const jwt = require("jsonwebtoken");
const Doctormodel = require("../models/doctor");
const Tokenmodel = require("../models/token");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

console.log(Doctormodel)

const sign = async(req, res, next) => {

    const { doctorname, password } = req.body;

    const InfoOfDoctor = await Doctormodel.create({
        doctorname: doctorname,
        password: password
    })

    const token = jwt.sign({
        doctor: InfoOfDoctor._id
    }, JWT_SECRET_KEY)

    return res.json({
        token: token
    })

}

const doctor = async(req, res, next) => {

    const Allpatient = Tokenmodel.find();
    return res.json({
        Patients: Allpatient
    })
}


module.exports = {
    sign, doctor, JWT_SECRET_KEY
}