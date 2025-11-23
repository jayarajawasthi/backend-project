import { Router } from "express";



import express from "express"
import { registerUser } from "../controllers/user.controller";

const router  = express.Router();

// router.route("/register").get(registerUser)
router.post("/register", registerUser)

//localhost:8000/api/v1/users/register
export default router