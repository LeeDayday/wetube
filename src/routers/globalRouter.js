import express from "express";
import { join, login } from "../controllers/userController";
import { trendings } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendings);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
