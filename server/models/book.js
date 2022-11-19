let mongoose = require('mongoose');
//create a book model
let bookModel = mongoose.Schema({ 
    FirstName: String,  //listing variables name being used in database and type
    LastName: String,
    JerseyNumber: String,
    Description: String,
    Age: Number
    },
    {
        collection: "Team" //colelction name of database
    }
);
module.exports = mongoose.model('Book', bookModel);

