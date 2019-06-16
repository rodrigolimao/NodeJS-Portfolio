var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) => {
  res.render('home', {});
});

router.get('/aboutme', (req, res, next) => {
  res.render('aboutme', {});
});

router.get('/projects', (req, res, next) => {
  res.render('projects', {});
});

router.get('/services', (req, res, next) => {
  res.render('services', {});
});

router.get('/contactme', (req, res, next) => {
  res.render('contactme', {});
});

module.exports = router;
