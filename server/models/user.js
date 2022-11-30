let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username: {
        type: String,
        default:"",
        trim:true,
        required: 'username is required'

    },
   /* let User = mongoose.Schema({
        username: {
            type: String,
            default:"",
            trim:true,
            required: 'username is required'
    
        }*/
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
    });

    // configuration for user control

let option = ({missingPasswordWord: "Wrong Password"});
User.plugin(passportLocalMongoose,option);
module.exports.User = mongoose.model('User', User);
