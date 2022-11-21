import React, { useState } from "react";
import { randomBytes } from "crypto";

function RoomCreation() {
  const [roomID, setRoomID] = useState<string>("");
  const GenerateCode = () => {
    setRoomID(Math.random().toString(16).substr(2, 6));
  };
  return (
    <div>
      <h1>Room Creation</h1>
      {roomID && <h1>{roomID}</h1>}
      <button onClick={GenerateCode}>Generate Your Room Code</button>
    </div>
  );
}

export default RoomCreation;
