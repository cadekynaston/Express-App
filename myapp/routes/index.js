var express = require('express');
var router = express.Router();

/* GET home page. */


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

router.get('/example/c', [cb0, cb1, cb2]);

router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

router.get('/cats', function (req, res) {
  var result = 0,
      num1 = 7,
      num2 = 3;
  result = num1 + num2
  res.send('Hello cats! ' + result);
});

router.get('/caden', function (req, res) {
  res.send('Hello caden! How was your spam rice?');
});

router.get('/cats/caden', function (req, res) {
  res.send('/cats/caden');
});

router.get('/whoisthebest', function (req, res) {
  res.send('Cade Kynaston is supreme!');
});
router.use('/', function (req, res) {
  res.send('Home page!');
});

module.exports = router;
