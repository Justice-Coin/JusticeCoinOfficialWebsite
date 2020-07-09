//jshint esversion: 6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {displaySectionNavs: true});
});

app.get('/team', function(req, res){
  res.render('team', {displaySectionNavs: false});
});

app.get('/about', function(req, res){
  res.render('about', {displaySectionNavs: false});
});

app.get('/miner', function(req, res){
  res.render('miner', {displaySectionNavs: false});
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
