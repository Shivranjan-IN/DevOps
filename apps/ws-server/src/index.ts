import {WebSocket, WebSocketServer} from "ws";
import {client} from "@repo/db/client"  ;    
const server = new WebSocketServer({ port: 8080 });

server.on("connection", async(socket)=>{
   client.user.create({
    data:{
        username:Math.random().toString(),
        password:Math.random().toString(),
        email:Math.random().toString()
    } 

 })

   socket.send("User created  server successfully")
})  