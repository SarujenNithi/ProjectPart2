let express = require('express');
let router = express.Router();
const app = express() 
app.use(express.static(__dirname+'/public'));
let indexController = require('../controller/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayHomePage);

/* GET Products page. */
router.get('/projects', indexController.displayAboutPage);


/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us'
    
  });
});

module.exports = router;
