import Phaser from 'phaser';
//refer to asset_import.d.ts for file imports
import { logoImg } from '../assets/phaserlogo.png';
import { socket } from '../config';

export class MainScene extends Phaser.Scene{
    logo: Phaser.GameObjects.Image;
    constructor() {
        super("MainScene")
    }

    init(){
        //Tell the server you want to join a lobby
        socket.emit("joinlobby", "main");
    }

    preload() {
        var x = 1;
        this.load.image("logo", logoImg);
    }

    update() {
    }

    create() {
        this.logo = this.add.image(400, 150, "logo").setInteractive();
        this.input.setDraggable(this.logo);

        //When the image is dragged, notify the server of its coordinates
        this.input.on("drag", (pointer: Phaser.Input.Pointer, object: Phaser.GameObjects.Image, x: number, y: number) => 
        {
            socket.emit("moveImg", x, y);
        });
        //Other clients connected to the server and in the lobby are sent this callback
        socket.on("moveImg", (x: number, y: number) => 
        {
            this.logo.setPosition(x, y);
        });
    }
}
