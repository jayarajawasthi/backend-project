//require('dotenv').config({paht:'./env})
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

import dotenv from "dotenv";
dotenv.config({
    path:"./env"
})

import express from "express";
const app = express();


/*import express from "express";
const app = express();

(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Err..", error);
         
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    }catch(err){
        console.error("Error: ",err);
        throw err;
    }
}) */

/*BETTER APPROACH */
connectDB().then(()=>{
    app.on("error", (error)=>{
        console.error("Error: ", error)
    })
    app.listen(process.env.PORT || 8000, (req,res)=>{
        console.log(`Server is running at ${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log("mongodb connection failed!!", err)
});
