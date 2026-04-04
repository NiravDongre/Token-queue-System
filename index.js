const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');
const { UserRoute } = require("./routes/user");
const { DoctorRoute } = require("./routes/doctor");
const ConnectDB = require("./config/config")

app.use(express.json());

app.use("/user", UserRoute)
app.use("/doctor", DoctorRoute);

app.use()

const PORT = process.env.PORT

ConnectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
})

