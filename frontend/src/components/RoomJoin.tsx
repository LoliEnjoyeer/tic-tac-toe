import React from "react";
import { Socket } from "socket.io-client";

interface JoinProps {
  socket: Socket;
}

function RoomJoin({ socket }: JoinProps) {
  const [roomCode, setRoomCode] = React.useState<string>("");

  const JoinRoom = () => {
    socket.emit("join_room", roomCode);
  };

  return (
    <div>
      <h1>Room Join</h1>
      <button onClick={JoinRoom}>Join</button>
      <input onChange={(e) => setRoomCode(e.currentTarget.value)} type="text" />
    </div>
  );
}

export default RoomJoin;
