//jshint esversion: 6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const https = require('https');
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

app.post('/', function(req, res){
  // Make the mailchimp api and email validation thing into a separate module. Code is getting messy.
  // Add sophisticated email verificaion and better error messages for mailchimp.

  var emailData = {
    members: [
      {
        email_address: req.body.email_address,
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
        res.render('');
      } else {
        console.log(response.statusCode);
        res.render('', {statusCode: response.statusCode});
      }
    });
  });
  request.write(emailDataJSON);
  request.end();
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server running on port 3000");
});
