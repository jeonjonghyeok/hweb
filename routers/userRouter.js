import express from "express";
import router from "../router";
const userRouter = express.Router();

userRouter.get(router.signin, (req,res) => res.render("signin.html"));
userRouter.get(router.login, (req,res) => res.render("login.html"));

export default userRouter;