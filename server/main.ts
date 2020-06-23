import io from 'socket.io';
import http from 'http';
import express from 'express';
import { Server } from 'socket.io'
import { addListeners } from './listeners';
import { connectToDb } from '../models/db';
import { addHandlers } from './handlers';

//This module is the entrypoint for running the server

const app = express();
const web = new http.Server(app)
const socket: Server = io(web);
addListeners(socket);
addHandlers(app);
web.listen(5000, () => console.log("Listening on port 5000"));

connectToDb().then(() => console.log("Database connection successful"))
    .catch(e => console.log("Database connection failed", e));
