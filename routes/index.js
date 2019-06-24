var express = require('express');
var router = express.Router();

//Nodemailer variables
const nodemailer = require('nodemailer');
const app = express();

//Npm package body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// POST route from contact form
app.post('/contactme', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at rodrigolima.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

/* GET Index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rodrigos Portfolio' });
});

/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('home', {});
});

/* GET About me page. */
router.get('/aboutme', (req, res, next) => {
  res.render('aboutme', {});
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', {});
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
  res.render('services', {});
});

/* GET Contact me page. */
router.get('/contactme', (req, res, next) => {
  res.render('contactme', {});
});

module.exports = router;

/*Contact form using NodeMailer package and body parser package retrieved from the website:
https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app from Tyler Krys */