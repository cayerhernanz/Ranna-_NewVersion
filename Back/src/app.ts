import express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
//routes
import * as dotenv from "dotenv"
dotenv.config()

export async function startServer(){
    const app = express();
    app.use(bodyParser.json());

    //Middlewares (token ect...)

    //Express routes registration
    return app;
}