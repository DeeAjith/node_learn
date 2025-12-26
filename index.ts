import http from "http";
import { logInfo } from "./log.ts";

const  server = http.createServer((_req, res) => {
  res.writeHead(200);
  res.end("Welcome to node world!!");
})



server.listen(3000, () => {
  logInfo("Server running at http://localhost:3000/");
},);