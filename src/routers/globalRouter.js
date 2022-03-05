import express from "express";
import {join, login} from "../controllers/userController";
import {trendings, search} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendings);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;