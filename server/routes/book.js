let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let Book = require('../models/book');
/* CRUD Operation */
/* Read Operation */
/* Get router for the book list */

router.get('/',(req,res,next)=>{
    Book.find((err, booklist)=>{
        if(err)
        {
            return console.error(err); //if error show error message
        }
        else 
        {
            res.render('book/list',{title:'Books', Booklist: booklist});
        }
    });
});

/* Add Operation */
/* Get Route for displaying the Add-page -- create operation */
router.get('/add',(req,res,next)=>{
    
    res.render('book/add',{title:'Add Book'})

});
/* Post Route for Processing the Add-page -- create operation */
router.post('/add',(req,res,next)=>{
    
    let newPlayer = Book({
        "FirstName":req.body.FirstName, //variables being used in data base and displaying them
        "LastName":req.body.LastName,
        "JerseyNumber":req.body.JerseyNumber,
        "Description":req.body.Description,
        "Age":req.body.Age
    });

    Book.create(newPlayer,(err,Book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Team-builder'); //redirects to localhost:300/Team-builder
        }
    })

});


/* Edit Operation */
/* Get Route for displaying the Edit-Operation -- Update operation */
router.get('/edit/:id',(req,res,next)=>{
    
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit',{title:'Edit Player', book:bookToEdit});
        }
    });

});
/* Post Route for displaying the Edit Operation -- Update operation */
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updatePlayer = Book({
        "_id":id,
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "JerseyNumber":req.body.JerseyNumber,
        "Description":req.body.Description,
        "Age":req.body.Age
    });
    Book.updateOne({_id:id},updatePlayer,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Team-builder');
        }
    });
});

/* Delete operation */
/* Get to perform delete operation -- Deletion */
router.get('/delete/:id',(req,res,next)=>{
    let id = req.params.id;
    Book.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Team-builder'); //redirects to team-builder local host page
        }
    })
});


module.exports=router;