import React, { useState } from "react";
import GameBoardMultiplayer from "../components/GameBoardMultiplayer";
import RoomCreation from "../components/RoomCreation";

function Multiplayer() {
  const [roomID, setRoomID] = useState<string>("");

  return <div>{roomID ? <GameBoardMultiplayer /> : <RoomCreation />}</div>;
}

export default Multiplayer;
