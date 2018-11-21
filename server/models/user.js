const mongoose=require('mongoose');

var User=mongoose.model('User',{
    text:{
        type:String,
        trim:true,
        minlength:1,
        require:true
    }
});

module.exports={User};