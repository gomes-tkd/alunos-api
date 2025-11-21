import express, { Express } from "express";
import homeRouter from "./routes/home-routes";

class App {
    app: Express;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", homeRouter);
    }
}

export default new App().app;