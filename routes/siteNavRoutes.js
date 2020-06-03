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
    {name: 'Item Name', description: 'Description of item', price: "$10"},
    {name: 'Item Name', description: 'Description of item', price: "$10"},
    {name: 'Item Name', description: 'Description of item', price: "$10"},
    {name: 'Item Name', description: 'Description of item', price: "$10"},
    {name: 'Item Name', description: 'Description of item', price: "$10"},
    {name: 'Item Name', description: 'Description of item', price: "$10"}
];

function searchDB (arr, target) {
    var obj = [];
    arr.forEach(currentItem => {
        if (currentItem.name === target) {
            obj.push(currentItem);
        }        
    });
    return obj;
};

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

/* GET Accounts page. */
router.get('/account', function(req, res, next) {
    res.render('account', { title: 'My Account' });
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
    res.render('login/authentication', { title: 'Login' });
});

/* GET Forgot page. */
router.get('/auth/forgot', function(req, res, next) {
    res.render('login/forgot_password', { title: 'Forgot' });
});

/* GET new person rego page. */
router.get('/auth/rego', function(req, res, next) {
    res.render('login/registration', { title: 'Registration' });
});

/* Post search results page. */
router.post('/search', function(req, res, next) {
    var searchValue=req.body.search;
    var results = searchDB(fakeDBObj, searchValue);

    res.render('search', { 
        title:'Search',
        search: searchValue,
        searchResults: results
    });
});

/* Post search results page. */
router.post('/', function(req, res, next) {
    res.render('home', {
        title: 'Help Now',
        events: 'Events Coming Up',
        clubs: 'Check Out these Club\'s Today',
        deals: 'Have a look at these great deals',
        clubsJoin: clubsInfo
    });
});

/* Post search results page. */
router.post('/payment', function(req, res, next) {
    res.render('payments', {
        title: 'Payment'
    });
});


module.exports = router;