var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const { application } = require('express');

var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(2000, function() {
    console.log("Sunucu calisiyor");
});

app.get('/api/cities', function(req, res) {
    res.send(cities);
});

app.post('/api/cities', function(req, res) {
    var city = req.body;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name === city.name)
        res.status(500).send({error: "Bu şehir zaten kayıtlı"});
    }

    cities.push(city);
    res.status(200).send(cities);
});