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

router.post('/login', function(req, res, next) {
  res.render('index');
});

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

module.exports = router;



