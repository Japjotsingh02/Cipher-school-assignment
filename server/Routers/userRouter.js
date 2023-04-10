const express=require("express");
const protectRoute = require("../controller/authHeplerController");
const { postUser, loginUser, getUserProfile } = require("../controller/userController");
const userRouter=express.Router();

userRouter
    .route('/')
    .get(getUserProfile);

userRouter
    .route('/signUp')
    .post(postUser);

userRouter
    .route('/login')
    .post(loginUser);

// userRouter.use(protectRoute);
userRouter
    .route('/profile')
    .get(protectRoute,getUserProfile);

module.exports=userRouter;