//jshint esversion: 6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const https = require('https');
const pageData = require(__dirname + '/pageData');

const app = express();
const faqs = pageData.faqs;
const team = pageData.team;



app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.get(['/', '/home'], function(req, res) {
  res.render('index', {
    faqs: faqs
  });
});

app.get('/faq', function(req, res) {
  res.render('faq', {faqs: faqs});
});

app.get('/about', function(req, res) {
  res.render('about', {
    team: team
  });
});

app.get('/web-miner', function(req, res) {
  res.render('webMiner');
});

app.get('/download', function(req, res) {
  res.render('download');
});

app.get('/download/windows', function(req, res) {
  res.render('downloadWindows');
});

app.get('/download/mac', function(req, res) {
  res.render('downloadMac');
});

app.get('/download/notSupported', function(req, res) {
  res.render('notSupported');
});

app.get('/downloadComplete', function(req, res){
  res.render('thanksForDownloading');
});

app.get(['/rpnpo', '/rpnpo.pdf'], function(req, res) {
  res.sendFile(__dirname + "/RPNPO.pdf");
});

app.get('/fcoin.png', (req, res) => {
  res.sendFile(__dirname + "/fcoin.png");
});

app.get('/blog', function(req, res) {
  res.render('blog');
});


app.post(['/', '/home'], function(req, res) {
  // Make the mailchimp api and email validation thing into a separate module. Code is getting messy.
  // Add sophisticated email verificaion and better error messages for mailchimp.

  var emailData = {
    members: [{
      email_address: req.body.email_address,
      status: "subscribed",
    }]
  };

  const emailDataJSON = JSON.stringify(emailData);
  const url = "https://us10.api.mailchimp.com/3.0/lists/" + process.env.MAILCHIMP_LIST_ID;
  const options = {
    method: "POST",
    auth: "JusticeCoin:" + process.env.MAILCHIMP_API_KEY
  };
  const request = https.request(url, options, function(response) {
    response.on("data", function(data) {
      if (response.statusCode == 200) {
        res.render('emailSuccess');
      } else {
        console.log(response.statusCode);
        res.render('emailFailure', {
          statusCode: response.statusCode
        });
      }
    });
  });
  request.write(emailDataJSON);
  request.end();
});

app.listen(process.env.PORT || 8000, function() {
  console.log("Server running on port 3000");
});
