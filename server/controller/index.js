let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next)=>{ //connects to routes to make code cleaner and less clustered
    res.render('index', { title: 'Home' });
  }

  module.exports.displayAboutPage = (req, res, next)=>{
    res.render('index', { title: 'About' });
  }
  