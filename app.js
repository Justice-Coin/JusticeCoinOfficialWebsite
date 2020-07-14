//jshint esversion: 6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const https = require('https');
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

const faqs = [{
    question: "What am I donating when I run JusticeCoin?",
    answer: "Your computer is being used to verify transactions for the Monero cryptocurrency ledger. This process of reward is known as “mining” and is an incentive to participate in the upkeep of the network. When you run JusticeCoin, you are donating a small percentage of your overall computing power to this task, which results in money we can contribute."
  },
  {
    question: "Why are you mining Monero?",
    answer: "Monero is an ASIC-resistant cryptocurrency, which means two things: computers designed for the singular purpose of mining cryptocurrency are unable to mine it amd consumer-level computers can mine it in a financially viable way. It also has a stable value relative to other high value cryptocurrencies. The open source code base for Monero mining software made this a tenable project for our team."
  },
  {
    question: "How Much CPU Power Does This Take?",
    answer: "The browser tab for JusticeCoin uses 10% of your CPU power, which should make it unnoticeable for most users. In the future we will implement a toggle bar allowing you to adjust the computing power."
  },
  {
    question: "Isn't It Faster To Just Donate Cash Directly",
    answer: "Directly routing money to nonprofits is, of course, the most efficient means of donation. We encourage everyone who has the means to donate directly, in addition to running JusticeCoin. However, this project is also greater than the sum of its parts, or the sum of its hashrate; This is as much about catapulting a radical platform for decentralized financing of non profits as opening the new frontier of non-profit technology. This project seeks to engage people in a dialog about the postive impacts cryptocurrency can have and its implementations for social good."
  },
];

const team = [{
    name: "Pratyush Mallick",
    position: "Co-Founder & Director of Innovation"
  },
  {
    name: "Mylinh Murphree",
    position: "Co-Founder & Director of Operations"
  },
  {
    name: "Tim Murphree",
    position: "Technical Advisor"
  },
  {
    name: "Nila Jeyapriya",
    position: "Director of IT"
  },
  {
    name: "Ethan Davenport",
    position: "Director of Finance"
  },
  {
    name: "Rohit Rajan",
    position: "Director of Systems Architecture"
  },
  {
    name: "Shrey Joshi",
    position: "Web Development Lead"
  },
  {
    name: "Brian Vo",
    position: "SEO Specialist"
  },
  {
    name: "Anay Gupta",
    position: "Development Lead"
  },
  {
    name: "Ishaan Javali",
    position: "Developer"
  },
  {
    name: "Rohan Ganta",
    position: "Developer"
  },
  {
    name: "Cynthia Diep",
    position: "Social Media Lead"
  },
  {
    name: "Navi Lanka",
    position: "Marketing Producer"
  },
  {
    name: "Sophia Khan",
    position: "Product Designer"
  },
];

app.get(['/', '/home'], function(req, res) {
  res.render('index', {
    faqs: faqs
  });
});

app.get('/faq', function(req, res) {
  res.redirect('/#faq');
});

app.get('/about', function(req, res) {
  res.render('about', {
    team: team
  });
});

app.get('/web-miner', function(req, res) {
  res.render('web-miner');
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

app.listen(process.env.PORT || 3000, function() {
  console.log("Server running on port 3000");
});
