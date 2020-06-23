import {Server, Socket} from 'socket.io';
import { Player } from '../models/Player'

//See https://socket.io/docs/emit-cheatsheet/
//This function registers handlers for a client to use when it connects to the server. 
//Add new handlers here.
export function addListeners(socket: Server){
    //connected and disconnected are special events
    socket.on('connection', (client: Socket) => {
        console.log(client.id, "connected")

        client.on("disconnect", function(event){
            console.log(client.id, "disconnected")
        })

        //This handler only sends response to caller (note: 'client.emit')
        client.on("get", async function(id: number){
            await Player.FindAsync(id).then((player) => {
                console.log(player)
                client.emit("sendplayer", player?.profile)
            });
        })

        client.on("add", async function(data: any){
            await Player.AddAsync(data);
        })

        //Invoked by the Main Scene
        client.on("joinlobby", (lobby: string) => client.join(lobby));

        //This handler sends response to all clients (note: 'socket.emit')
        //This handler sends response to members of a room (aka lobby)
        client.on("moveImg", (x: number, y: number) => socket.to("main").emit("moveImg", x, y));
    });
}
