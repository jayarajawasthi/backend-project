import { request, response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

// const registerUser = asyncHandler(async (req,res)=>{
//     res.status(200).json({
//         message:"ok"
//     })
// })

const registerUser =  asyncHandler( async (req,res)=>{
    const {name, email, password} = req.body;
    res.status(200).json({
        message:"Ok",
        user:{name, email}
    })
})


export {registerUser}