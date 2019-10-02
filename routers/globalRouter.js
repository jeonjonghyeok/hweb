import express from "express";
import router from "../router";
import {home,postSignin,getSignin,getLogin,postLogin,logout} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(router.home,home);
globalRouter.get(router.login,getLogin);
globalRouter.post(router.login,postLogin);
globalRouter.get(router.logout, logout);
globalRouter.get(router.signin, getSignin);
globalRouter.post(router.signin, postSignin);


export default globalRouter;