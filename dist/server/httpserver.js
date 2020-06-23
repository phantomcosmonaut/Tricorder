"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHandlers = void 0;
const fs_1 = __importDefault(require("fs"));
//These methods discover and serve static files to the http client with the Express module
//Set root directory for static files
let staticDir = process.cwd() + "/dist/static/";
let gameDir = process.cwd() + "/dist/game/";
function addHandlers(app) {
    app.get("/", (request, response) => {
        fs_1.default.exists(staticDir + "index.html", (bool) => console.log(bool));
        response.sendFile(staticDir + "index.html");
    });
    app.get("/client.js", (request, response) => {
        response.sendFile(staticDir + "client.js");
    });
    app.get("/game/config.js", (request, response) => {
        response.sendFile(gameDir + "config.js");
    });
}
exports.addHandlers = addHandlers;
