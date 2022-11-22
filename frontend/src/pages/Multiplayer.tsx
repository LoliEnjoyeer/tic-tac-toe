import React, { useEffect, useState } from "react";
import RoomCreation from "../components/RoomCreation";
import { io } from "socket.io-client";
import RoomJoin from "../components/RoomJoin";
import GameBoard from "../components/GameBoardMultiplayer";

const socket = io("http://localhost:3001");

function Multiplayer() {
  const [roomCode, setRoomCode] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    socket.on("room_created", (code) => {
      console.log("joined room");
      setConnected(true);
    });

    socket.on("joined_room", (code) => {
      setRoomCode(code);
      setConnected(true);
      console.log("joined room ", code);
    });
  }, []);

  const getRoomCode = (data: string) => {
    setRoomCode(data);
    socket.emit("create_room", data);
  };

  return (
    <div>
      {connected ? (
        <>
          <h1>Your room code: {roomCode}</h1>
          <GameBoard roomCode={roomCode} socket={socket} />
        </>
      ) : (
        <>
          <RoomCreation getRoomCode={getRoomCode} socket={socket} />
          <RoomJoin socket={socket} />
        </>
      )}
    </div>
  );
}

export default Multiplayer;
