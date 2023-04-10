const express=require("express");
const cors=require("cors");
var cookieParser = require('cookie-parser')
const userRouter=require('./Routers/userRouter');
const app=express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use('/user',userRouter);



app.listen(5000);