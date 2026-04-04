const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');
const { UserRoute } = require("./routes/user");
const { DoctorRoute } = require("./routes/doctor");


app.use(express.json());

app.use("/user", UserRoute)
app.use("/doctor", DoctorRoute);


mongoose.connect(process.env.MONGO_URL)

app.listen(3000)
