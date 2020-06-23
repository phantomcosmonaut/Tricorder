"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const listeners_1 = require("./listeners");
const db_1 = require("../models/db");
const handlers_1 = require("./handlers");
//This module is the entrypoint for running the server
const app = express_1.default();
const web = new http_1.default.Server(app);
const socket = socket_io_1.default(web);
listeners_1.addListeners(socket);
handlers_1.addHandlers(app);
web.listen(5000, () => console.log("Listening on port 5000"));
db_1.connectToDb().then(() => console.log("Database connection successful"))
    .catch(e => console.log("Database connection failed", e));
