import React, { useState } from "react";
import { Socket } from "socket.io-client";
import GameBoard from "./GameBoardMultiplayer";

interface CreationProps {
  socket: Socket;
  getRoomCode: (data: string) => void;
}

const RoomCreation = ({ socket, getRoomCode }: CreationProps) => {
  const GenerateCode = () => {
    getRoomCode(Math.random().toString(16).substr(2, 6));
  };

  return (
    <div>
      <h1>Create Room</h1>
      <button onClick={GenerateCode}>Generate Code</button>
    </div>
  );
};

export default RoomCreation;
