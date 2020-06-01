var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Help Now' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' });
});

/* GET home page. */
router.get('/survey', function(req, res, next) {
    res.render('surveys', { title: 'Survey' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

module.exports = router;