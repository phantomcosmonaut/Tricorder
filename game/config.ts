import Phaser from "phaser";
import io from 'socket.io-client';
import { MainScene } from '.\\scenes\\MainScene';

//Connects to the socket server and invokes server handlers by calling 'socket.emit' methods
export const socket = io('http://localhost:5000');

//Generic Phaser configuration
const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  scene: [MainScene]
};

const game = new Phaser.Game(config);