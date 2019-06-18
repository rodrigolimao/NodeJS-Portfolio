var express = require('express');
var router = express.Router();

/* GET home page. */
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
