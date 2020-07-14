import fs from 'fs';
import path from 'path';
import { Request, Response, Express } from 'express';

//These methods discover and serve static files to the http client with the Express module
//Set root directory for static files
let staticDir = path.dirname(__dirname) + "/static/";

//List all files needed for running the game
export function addHandlers(app: Express){
    app.get("/", (request: Request, response: Response) => {
        response.sendFile(staticDir + "index.html");
    });
    
    app.get("/bundle.js", (request: Request, response: Response) => {
        response.sendFile(staticDir + "bundle.js")
    });
        
    app.get("/logo.png", (request: Request, response: Response) => {
        response.sendFile(staticDir + "18a7191678e558c5519c3e330eff5f85.png")
    });

    app.get("/phaserlogo.png", (request: Request, response: Response) => {
        response.sendFile(staticDir + "phaserlogo.png")
    });
}
