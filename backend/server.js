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
    socket.to(result.roomCode).emit("result_response", {
      serverScoreX: result.scoreX,
      serverScoreO: result.scoreO,
    });
  });

  socket.on("create_room", (roomCode) => {
    socket.join(roomCode);
    socket.emit("room_created", roomCode);
  });

  socket.on("join_room", (code) => {
    socket.join(code);
    socket.emit("joined_room", code);
  });
});
