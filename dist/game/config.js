"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const phaser_1 = __importDefault(require("phaser"));
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const MainScene_1 = require(".\\scenes\\MainScene");
//Connects to the socket server and invokes server handlers by calling 'socket.emit' methods
exports.socket = socket_io_client_1.default('http://localhost:5000');
//Generic Phaser configuration
const config = {
    type: phaser_1.default.AUTO,
    parent: "game",
    width: 800,
    height: 600,
    scene: [MainScene_1.MainScene]
};
const game = new phaser_1.default.Game(config);
