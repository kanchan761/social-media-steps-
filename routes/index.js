var express = require('express');
var router = express.Router();

const user = require("../db/userschema")



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

router.post('/Register', function(req, res, next) {
  res.render('register');
});
module.exports = router;
