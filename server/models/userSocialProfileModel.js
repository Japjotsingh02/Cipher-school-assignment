require('dotenv').config();
const { model, Schema, default: mongoose } = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userProfilesSchema=Schema({
    user:{
        ref:'userModel',
        type:ObjectId,
        required:true
    },
    linkedin:{
        type:String,
        default:"",
    },
    github:{
        type:String,
        default:"",
    },
    facebook:{
        type:String,
        default:"",
    },
    twitter:{
        type:String,
        default:"",
    },
    instagram:{
        type:String,
        default:"",
    },
    otherWeb:{
        type:String,
        default:"",
    }
},
{ timestamps: true });

const userSocialProfileModel=model('userSocialProfileModel',userProfilesSchema);

module.exports=userSocialProfileModel;