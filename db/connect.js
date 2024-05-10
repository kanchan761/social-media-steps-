const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0/ss1").then(()=>{console.log("connected")})