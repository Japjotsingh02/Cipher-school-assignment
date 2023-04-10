const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken');
const ProfileModel = require("../models/userSocialProfileModel");
require('dotenv').config();

async function postUser(req,res){
    try{
        let {fName,lName,email,password}=req.body;
        
        if(!email && !fName && !lName && !password){
            res.status(400).json({
                message:"Fill all required fields",
            })
        }

        const oldUser=await userModel.findOne({email:email});
        if(oldUser) return res.json({message:"user already exist",})
        
        email = email.trim();
        password = password.trim();
        fName=fName.trim();
        lName=lName.trim();

        
        let user=await userModel.create(req.body);

        let uid=user._id;
        let secret=process.env.SECRET_KEY;
        let token=jwt.sign({payload:uid},secret,{ expiresIn: "1h" });
        
        if(user){
            res.json({
                message:"user successfully signed up",
                token:token,
            })
        }
        else{
            console.log('error');
            res.status(500).json({
                message:"error while sign up",
                data:user,
            });
        }
    }
    catch(err){
        console.log('hi',err.message);
        res.status(500).json({
            message:err.message,
        });
    };
}

async function loginUser(req,res){
    try{
        let {email,password}=req.body;
        if(email){
            email = email.trim();
            password = password.trim();
            
            let user=await userModel.findOne({email:email});
            // console.log(user);
            
            if(user){
                if(password!==user.password){
                    return res.status(400).json({
                        message:"Password Incorrect",
                    })
                }


                let uid=user._id;
                let secret=process.env.SECRET_KEY;
                let token=jwt.sign({payload:uid},secret,{ expiresIn: "1h" });
                // res.cookie('isLoggedIn',token);

                res.json({
                    message:'user logged in successfully',
                    token:token,
                });
            }
            else{
                res.status(400).json({
                    message:"user not found",
                })
            }
        }
        else{
            return res.status(400).json({
                message:"email id can't be empty",
            });
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
}

function getUserProfile(req,res){
    try{
        if(req.user){
            res.json({
                message:'User profile data retrieved successfully',
                user:req.user,
            });
        }
        else{
            res.status(500).json({
                message:"Please login again",
            });
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
}

module.exports={postUser,loginUser,getUserProfile};
