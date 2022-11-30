let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let Team = require('../models/book');
/* CRUD Operation */
/* Read Operation */
/* Get router for the book list */

router.get('/',(req,res,next)=>{
    Team.find((err, teamlist)=>{
        if(err)
        {
            return console.error(err); //if error show error message
        }
        else 
        {
            res.render('book/list',{title:'Teams', Booklist: teamlist});
        }
    });
});

/* Add Operation */
/* Get Route for displaying the Add-page -- create operation */
router.get('/add',(req,res,next)=>{
    
    res.render('book/add',{title:'Add Team'})

});
/* Post Route for Processing the Add-page -- create operation */
router.post('/add',(req,res,next)=>{
    
    let newTeam = Team({
        "Team":req.body.Team, //variables being used in data base and displaying them
        "Eliminated":req.body.Eliminated,
        "Players":req.body.Players,
        "PreviousGames":req.body.PreviousGames,
        "Place":req.body.Place
    });

    Team.create(newTeam,(err,Team)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Fifa-Team'); //redirects to localhost:300/Team-builder
        }
    })

});


/* Edit Operation */
/* Get Route for displaying the Edit-Operation -- Update operation */
router.get('/edit/:id',(req,res,next)=>{
    
    let id = req.params.id;
    Team.findById(id,(err,teamToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit',{title:'Edit Team', book:teamToEdit});
        }
    });

});
/* Post Route for displaying the Edit Operation -- Update operation */
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updatePlayer = Team({
        "_id":id,
        "Team":req.body.Team, //variables being used in data base and displaying them
        "Eliminated":req.body.Eliminated,
        "Players":req.body.Players,
        "PreviousGames":req.body.PreviousGames,
        "Place":req.body.Place
    });
    Team.updateOne({_id:id},updatePlayer,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Fifa-Team');
        }
    });
});

/* Delete operation */
/* Get to perform delete operation -- Deletion */
router.get('/delete/:id',(req,res,next)=>{
    let id = req.params.id;
    Team.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Fifa-Team'); //redirects to team-builder local host page
        }
    })
});


module.exports=router;