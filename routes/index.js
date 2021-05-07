var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coding' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { users: '' });
});

module.exports = router;
