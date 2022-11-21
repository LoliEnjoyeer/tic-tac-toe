const express = require("express");
const http = require("http");

const cors = require("cors");
const app = express();

app.use(cors());

const server = http.createServer(app).listen(3001, () => {
  console.log("server is running on port 3001");
});

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("score", (result) => {
    socket.broadcast.emit("result_response", {
      serverScoreX: result.scoreX,
      serverScoreO: result.scoreO,
    });
  });
});
