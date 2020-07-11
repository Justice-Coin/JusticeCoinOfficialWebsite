//jshint esversion: 6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('index');
});

app.get('/learn', function(req, res){
  res.render('learn');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/web-miner', function(req, res){
  res.render('web-miner');
});

app.get('/download', function(req, res){
  res.render('download');
}); 

app.get('/blog', function(req, res){
  res.render('blog');
});

app.get('/contact', function(req, res){
  res.render('contact');
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server running on port 3000");
});
