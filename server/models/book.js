let mongoose = require('mongoose');
//create a book model
let FTeams = mongoose.Schema({ 
    Team: String,  //listing variables name being used in database and type
    Eliminated: String,
    Players: String,
    PreviousGames: String,
    Place: String
    },
    {
        collection: "Team" //colelction name of database
    }
);
module.exports = mongoose.model('Team', FTeams);

