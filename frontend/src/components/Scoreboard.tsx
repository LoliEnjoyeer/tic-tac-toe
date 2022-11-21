import React from "react";

interface ScoreboardProps {
  scoreX: number;
  scoreO: number;
}

function Scoreboard({ scoreX, scoreO }: ScoreboardProps) {
  return (
    <div>
      <h1>{`player X: ${scoreX}`}</h1>
      <h1>{`player O: ${scoreO}`}</h1>
    </div>
  );
}

export default Scoreboard;
