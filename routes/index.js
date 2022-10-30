var express = require('express');
var router = express.Router();
const app = express() //Aid online
app.use(express.static(__dirname+'/public'));

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'

  });
});


/* GET About page. */
router.get('/home#about', function(req, res, next) {
  res.render('index', { 
    title: 'About'
    
  });
});

/* GET Products page. */
router.get('/home#projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
    
  });
});


/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us'
    
  });
});

module.exports = router;
