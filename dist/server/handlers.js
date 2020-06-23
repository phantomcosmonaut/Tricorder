"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHandlers = void 0;
const path_1 = __importDefault(require("path"));
//These methods discover and serve static files to the http client with the Express module
//Set root directory for static files
let staticDir = path_1.default.dirname(__dirname) + "/static/";
//List all files needed for running the game
function addHandlers(app) {
    app.get("/", (request, response) => {
        response.sendFile(staticDir + "index.html");
    });
    app.get("/bundle.js", (request, response) => {
        response.sendFile(staticDir + "bundle.js");
    });
    app.get("/logo.png", (request, response) => {
        response.sendFile(staticDir + "18a7191678e558c5519c3e330eff5f85.png");
    });
    app.get("/phaserlogo.png", (request, response) => {
        response.sendFile(staticDir + "phaserlogo.png");
    });
}
exports.addHandlers = addHandlers;
