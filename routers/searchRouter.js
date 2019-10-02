import express from "express";
import router from "../router";
import {bbq} from "../controllers/searchController";
const searchRouter = express.Router();

searchRouter.get(router.bbq,bbq);


export default searchRouter;