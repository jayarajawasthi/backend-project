import { Router } from "express";



import express from "express"
import { registerUser } from "../controllers/user.controller";

const router  = express.Router();

router.route("/register").get(registerUser)
export default router