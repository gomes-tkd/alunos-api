import { Router, Request, Response } from "express";
import homeController from "../controllers/home-controller";

const homeRouter: Router = Router();

homeRouter.get("/", homeController.index);


export default homeRouter;