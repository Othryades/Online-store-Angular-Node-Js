var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
var users = [
    {email: 'moris@gmail.com', name: 'Moris', password: '1234'}
];
var orders = [];
var albums = [
    {
        id: 1,
        name: 'Arctic Monkeys - Are U mine',
        price: 25,
        image: 'https:\/\/upload.wikimedia.org\/wikipedia\/en\/0\/04\/Arctic_Monkeys_-_AM.png'
    },
    {
        id: 2,
        name: 'Maitre Gims - Sub',
        price: 36,
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Subliminal-album-by-maitre-gims.jpg'
    },
    {
        id: 3,
        name: 'Nas - ...I am',
        price: 50,
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Nas_-_I_Am....jpg'
    },
    {
        id: 4,
        name: 'Crystal Castles - II',
        price: 49,
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Crystal_Castles_-_Crystal_Castles_II.png'
    }
];


function sortfunction(a, b) {
    return (b.score - a.score)
}

app.post('/register', function (req, res) {
    console.log(JSON.stringify(req.body));
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    users.push(user);
    res.json(users);
});
app.get('/users', function (req, res) {
    res.json(users);
});
app.get('/products', function (req, res) {
    res.json(albums);
});
app.post('/login', function (req, res) {
    console.log(JSON.stringify(req.body));
    var email = req.body.email;
    var password = req.body.password;

    var foundUser;
    users.forEach(function (u) {
        if (u.email == email && u.password == password) {
            foundUser = u;
        }
    });

    if (foundUser) {
        res.json(foundUser);
    } else {
        res.json(null);
    }


});
app.post('/pay', function (req, res) {

    var order = {
        email: req.body.email,
        cart: req.body.cart,
        address: req.body.address,
        creditCard: req.body.creditCard,
    };


    orders.push(order)
    res.json(order);

});



function compare(a, b) {
    if (a.score < b.score)
        return -1;
    if (a.score > b.score)
        return 0;
    return 1;
}


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
