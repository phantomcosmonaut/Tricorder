"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainScene = void 0;
const phaser_1 = __importDefault(require("phaser"));
//refer to asset_import.d.ts for file imports
const phaserlogo_png_1 = require("../assets/phaserlogo.png");
const config_1 = require("../config");
class MainScene extends phaser_1.default.Scene {
    constructor() {
        super("MainScene");
    }
    init() {
        //Tell the server you want to join a lobby
        config_1.socket.emit("joinlobby", "main");
    }
    preload() {
        var x = 1;
        this.load.image("logo", phaserlogo_png_1.logoImg);
    }
    update() {
    }
    create() {
        this.logo = this.add.image(400, 150, "logo").setInteractive();
        this.input.setDraggable(this.logo);
        //When the image is dragged, notify the server of its coordinates
        this.input.on("drag", (pointer, object, x, y) => {
            config_1.socket.emit("moveImg", x, y);
        });
        //Other clients connected to the server and in the lobby are sent this callback
        config_1.socket.on("moveImg", (x, y) => {
            this.logo.setPosition(x, y);
        });
    }
}
exports.MainScene = MainScene;
