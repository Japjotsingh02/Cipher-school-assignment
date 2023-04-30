require('dotenv').config();
const { model, Schema, default: mongoose } = require("mongoose");
const emailValidator=require('email-validator');
const bcrypt=require('bcrypt');

mongoose.connect(process.env.CONNECTION_URL)
.then(function(db){
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

const userSchema=Schema({
    fName:{
        type:String,
        required:true,
    },
    lName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        },
    },
    phoneNo:{
        type:Number,
        index:{
            unique:true,
            partialFilterExpression: {phoneNo: {$type: "string"}},
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    description:{
        type:String,
    },
    profession:{
        type:String,
        default:'College Student',
        enum:["Schooling","College Student","Teaching","Job","Freelancing"],
    },
    education:{
        type:String,
        default:'Graduation',
        enum:["Primary","Secondary","Higher Secondary","Graduation","Post Graduation"],
    },
    interests:{
        type:String,
        enum:["App Development","Web Development","Game Development","Data Structures","Others"],
    },
    profileImg:{
        type:String,
        default:'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
    followers:{
        type:Number,
        default:0,
    },
    following:{
        type:Number,
        default:0,
    },
    // resetToken:String,
},
{ timestamps: true });

async function genSaltAndEncryptPassword(password){
    let salt =await bcrypt.genSalt();
    let hashedString=await bcrypt.hash(password,salt);
    return hashedString;
}

userSchema.pre('save',async function(){
    let encryptedPass=await genSaltAndEncryptPassword(this.password);
    this.password=encryptedPass;
});

userSchema.methods.updatePassword=async (newPass)=>{
    let encryptedPass=await genSaltAndEncryptPassword(newPass);
    return encryptedPass;
};

const User=model('User',userSchema);

module.exports=User;

