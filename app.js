//jshint esversion: 6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const https = require('https');
require('dotenv').config();

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

app.post('/', function(req, res){
  // Make the mailchimp api and email validation thing into a separate module. Code is getting messy.
  // Add sophisticated email verificaion and better error messages for mailchimp.

  var emailData = {
    members: [
      {
        email_address: req.body.EMAIL,
        status: "subscribed",
      }
    ]
  };

  const emailDataJSON = JSON.stringify(emailData);
  const url = "https://us10.api.mailchimp.com/3.0/lists/" + process.env.MAILCHIMP_LIST_ID;
  const options = {
    method: "POST",
    auth: "JusticeCoin:" + process.env.MAILCHIMP_API_KEY
  };
  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      if (response.statusCode == 200) {
        res.render('emailSubscribeSuccess');
      } else {
        res.render('emailSubscribeFailure', {statusCode: response.statusCode});
      }
    });
  });
  request.write(emailDataJSON);
  request.end();
});

app.post('/emailSubscribeSuccess', function(req, res){
  res.redirect('/');
});

app.post('/emailSubscribeFailure', function(req, res){
  res.redirect('/#contact');
});


app.listen(3000, function(){
  console.log("Server running on port 3000");
});
