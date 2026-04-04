const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');
const { UserRoute } = require("./routes/user");s
const { DoctorRoute } = require("./routes/doctor");


app.use(express.json());

app.use("/user", UserRoute)
app.use("/doctor", DoctorRoute);

app.use()


app.listen(3000)
