import express from "express";
import router from "../router";
import {home,postSignin,getSignin,login,logout} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(router.home,home);
globalRouter.get(router.login,login);
globalRouter.get(router.logout, logout);
globalRouter.get(router.signin, getSignin);
globalRouter.post(router.signin, postSignin);


export default globalRouter;