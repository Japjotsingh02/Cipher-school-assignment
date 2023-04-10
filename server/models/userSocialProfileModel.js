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
    },
    github:{
        type:String,
    },
    facebook:{
        type:String,
    },
    twitter:{
        type:String,
    },
    otherWeb:{
        type:String,
    }
},
{ timestamps: true });

const userSocialProfileModel=model('userSocialProfileModel',userProfilesSchema);

module.exports=userSocialProfileModel;