let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username: {
        type: String,
        default:"",
        trim:true,
        required: 'username is required'

    },
   
        /*password: {
            type: String,
            default:"",
            trim:true,
            required: 'Password is required'
    
        }*/
        displayName: {
            type: String,
            default:"",
            trim:true,
            required: 'DisplayName is required'
    
        },
    
    created:
    {
        type: Date,
        default: Date.now
    },
    update: 
    {
        type: Date,
        default: Date.now
    }


},
    {
        collection: "User"
    }
    
);

    // configuration for user control

let option = ({missingPasswordWord: "Wrong Password/Missing Password"});
User.plugin(passportLocalMongoose,option);
module.exports.User = mongoose.model('User', User);
