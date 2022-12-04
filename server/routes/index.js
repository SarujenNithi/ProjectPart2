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

//get router for login page
router.get('/login', indexController.displayLoginPage);
//post router for login page
router.post('/login', indexController.processLoginPage);

//get router for registration page
router.get('/register', indexController.displayRegisterPage);
//post router for registration page
router.post('/register', indexController.processRegisterPage);

//get router for logout page
router.get('/logout', indexController.performLogout);




module.exports = router;
