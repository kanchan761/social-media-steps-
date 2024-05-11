var express = require('express');
var router = express.Router();

const user = require("../db/userschema")
const passport = require("passport")

const LocalStrategy = require("passport-local")
passport.use(new LocalStrategy(user.authenticate()))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/login', passport.authenticate("local",{

successRedirect :"/profile",  
failureRedirect :"/",

}), function(req, res, next) {}

);



function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    next()
  }
  else{
    res.redirect('/')
  }
}
router.get("/logout" ,isLoggedIn, function (req,res,next){
req.logout(()=>{
  res.redirect('/')
})


})


router.get('/Register', function(req, res, next) {
  res.render('register');
});

router.post('/Register',async function(req, res, next) {
 try{
  // const newuser = new user(req.body)
  // await newuser.save()
  // res.redirect('/')
  
  const {name , username , email , password} = req.body
  await user.register({name ,username ,email},password)
  res.redirect('/')
}

catch(error){
  res.json(error.message)
}
});

router.get("/profile", isLoggedIn, function(req,res,next){
  res.render("profile")
})


module.exports = router;



