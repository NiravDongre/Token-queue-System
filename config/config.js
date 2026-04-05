
const mongoose = require("mongoose")

 const main = async() => {
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Connected")
    }
    catch(err){
        console.log(`The is Error is ${err}`)
        
    }
}

module.exports = main
