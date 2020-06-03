var express = require('express');
var router = express.Router();

var clubsInfo = [
    ['/images/arrows.png', 'Archery Club'],
    ['/images/balls.png', 'Lawn Bowls Club'],
    ['/images/chess.png', 'Chess Club'],
    ['/images/flowers.png', 'Floral Club'],
    ['/images/books2.png', 'Book Club']
];

var fakeDBObj = [
    {name: 'Item Name', description: 'Description of item'},
    {name: 'Item Name', description: 'Description of item'},
    {name: 'Item Name', description: 'Description of item'},
    {name: 'Item Name', description: 'Description of item'},
    {name: 'Item Name', description: 'Description of item'},
    {name: 'Item Name', description: 'Description of item'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: 'Help Now',
        events: 'Events Coming Up',
        clubs: 'Check Out these Club\'s Today',
        deals: 'Have a look at these great deals',
        clubsJoin: clubsInfo
    });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' });
});

/* GET Survey page. */
router.get('/surveys', function(req, res, next) {
    res.render('surveys', { title: 'Survey' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

/* GET Event Rego page. */
router.get('/events', function(req, res, next) {
    res.render('events', { title: 'Events' });
});

/* GET Event EOI page. */
router.get('/events/eoi', function(req, res, next) {
    res.render('event_eoi', { title: 'Events' });
});

/* GET Login page. */
router.get('/auth', function(req, res, next) {
    res.render('login/authentication', { title: 'Contact Us' });
});

/* GET Forgot page. */
router.get('/auth/forgot', function(req, res, next) {
    res.render('login/forgot_password', { title: 'Events' });
});

/* GET new person rego page. */
router.get('/auth/rego', function(req, res, next) {
    res.render('login/registration', { title: 'Events' });
});

/* GET home page. */
router.post('/search', function(req, res, next) {

    var searchValue=req.body.search;
    res.render('search', { 
        title:'Search',
        search: searchValue,
        fakeDBObj
    })
});

module.exports = router;