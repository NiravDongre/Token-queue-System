const { Router} = require("express");
const { sign, doctor } = require("../controllers/doctor.controller");
const { DoctorMiddleware } = require("../middleware/doctor.middlewarer");

const DoctorRoute = Router();

DoctorRoute.post("/sign", sign);
DoctorRoute.get("/patient", DoctorMiddleware,doctor)

module.exports = {
    DoctorRoute
}