var express = require('express');
var router = express.Router();

var clubsInfo = [
    ['/images/arrows.png', 'Archery Club'],
    ['/images/balls.png', 'Lawn Bowls Club'],
    ['/images/chess.png', 'Chess Club'],
    ['/images/flowers.png', 'Floral Club'],
    ['/images/books2.png', 'Book Club'],
];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title:  'Help Now',
        events: 'Events Coming Up',
        clubs:  'Check Out these Club\'s Today',
        deals:  'Have a look at these great deals',
        clubsJoin: clubsInfo
    });
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