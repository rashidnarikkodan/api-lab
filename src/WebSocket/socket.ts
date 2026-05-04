import { Server } from "node:http";
import WebSocket from "ws";

export function initWebSocket(server: Server) {
  const wss = new WebSocket.Server({ server });
  wss.on("connection", (ws) => {
    ws.on('message',(data)=>{
      wss.clients.forEach((client)=>{
        client.send(data.toString())
      })
    })

  });
}
