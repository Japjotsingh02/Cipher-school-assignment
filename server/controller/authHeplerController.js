const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require('dotenv').config();

async function protectRoute(req,res,next){
    try{
        const token=req.headers["isLoggedIn"] || req.headers["isloggedin"];
        if(token){
            // console.log(req.cookies);
            let payload=jwt.verify(token,process.env.SECRET_KEY);

            if(payload){
                // console.log('payload token->',payload);
                let user=await userModel.findById(payload.payload);
                // console.log('user->',user);
                req.user=user;
                req.id=user.id;
                next();
            }
            else{
                return res.status(401).json({
                    message:'Please login again',
                });
            }
        }
        else{
            return res.status(401).json({
                message:'operation not allowed. User is not signed in'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
        })
    }
}


module.exports=protectRoute;
