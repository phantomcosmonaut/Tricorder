"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListeners = void 0;
const Player_1 = require("../models/Player");
//See https://socket.io/docs/emit-cheatsheet/
//This function registers handlers for a client to use when it connects to the server. 
//Add new handlers here.
function addListeners(socket) {
    //connected and disconnected are special events
    socket.on('connection', (client) => {
        console.log(client.id, "connected");
        client.on("disconnect", function (event) {
            console.log(client.id, "disconnected");
        });
        //This handler only sends response to caller (note: 'client.emit')
        client.on("get", function (id) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Player_1.Player.FindAsync(id).then((player) => {
                    console.log(player);
                    client.emit("sendplayer", player === null || player === void 0 ? void 0 : player.profile);
                });
            });
        });
        client.on("add", function (data) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Player_1.Player.AddAsync(data);
            });
        });
        //Invoked by the Main Scene
        client.on("joinlobby", (lobby) => client.join(lobby));
        //This handler sends response to all clients (note: 'socket.emit')
        //This handler sends response to members of a room (aka lobby)
        client.on("moveImg", (x, y) => socket.to("main").emit("moveImg", x, y));
    });
}
exports.addListeners = addListeners;
