const { Router} = require("express");
const { signup, signin, doctor } = require("../controllers/doctor.controller")
const { DoctorMiddleware } = require("../middleware/doctor.middlewarer");

const DoctorRoute = Router();

DoctorRoute.post("/sign", signup);
DoctorRoute.get("/patient", DoctorMiddleware,doctor)

module.exports = {
    DoctorRoute
}