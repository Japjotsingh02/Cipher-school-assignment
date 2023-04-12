const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken');
const userProfileModel = require("../models/userSocialProfileModel");
require('dotenv').config();
const bcrypt=require('bcrypt');


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
        let userProfile=await userProfileModel.create({
            user:uid,
        });
        console.log(userProfile);

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
            
            if(user){
                const isPasswordCorrect = await bcrypt.compare(password, user.password);

                if(!isPasswordCorrect){
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

async function getUserProfile(req,res){
    try{
        if(req.user){
            let profiles={};
            await userProfileModel.findOne({user:req.id})
            .then((data)=>{
                profiles=data;
            })
            .catch((err)=>{
                console.log(err);
            })

            let user={
                ...req.user.toObject(),
                profiles:profiles,
            };
            
            // console.log(user);

            res.json({
                message:'User profile data retrieved successfully',
                user:user,
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

const updatePassword=async (req,res)=>{

}

async function updateUserProfile(req,res){
    try{
        const {fName,lName,email,phoneNo,password,description,profiles,profession}=req.body;
        
        const id=req.body._id;
        let toBeUpdated=req.body.updated;
        let dataUpdated='';

        let user=null,
            update={expire:new Date()},
            options={upsert:true,new:true,setDefaultsOnInsert:true};

        if(toBeUpdated==='profiles'){
            dataUpdated=profiles;
            const pfId=profiles._id;
            const {linkedin,facebook,github,otherWeb,twitter,instagram}=profiles;

            user=await userProfileModel.findByIdAndUpdate(pfId,{
                linkedin,
                facebook,
                github,
                otherWeb,
                twitter,
                instagram
            },update,options);
        }
        else if(toBeUpdated==='description'){
            dataUpdated=description;

            user=await userModel.findByIdAndUpdate(id,{[toBeUpdated]:dataUpdated},update,options);
        }
        else if(toBeUpdated==='password'){
            updatePassword(dataUpdated);
        }

        if(user){
            const userInfo = await userModel.findById(id);

            return res.json({
                message:'user updated',
                user:userInfo,
            })
        }
        else{
            res.status(400).json({
                message:'user not found'
            });
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
}

module.exports={postUser,loginUser,getUserProfile,updateUserProfile};
