const mongoose = require("mongoose")
const passport = require("passport")
const plm = require("passport-local-mongoose")
const userschema = new mongoose.Schema({
    name:{
        type :String,
        trim : true,
        required :[true, "name is required"],
        minilendth:[4 , " mini 4 char require"]

    },
    username:{
        type :String,
        trim : true,
        required :[true, "name is required"],
        minilendth:[4 , " mini 4 char require"]

    },

    email :{
        type: String,
        trim : true,
        lowercase: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address'], 
    },
    password:String,

},{timestamps:true})

userschema.plugin(plm)

module.exports = mongoose.model("userdata" , userschema)
