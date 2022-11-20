import React, { useEffect, useRef, useState } from "react";
import Box from "./Box";
import Box2 from "./Box2";

type GameState = ("" | "X" | "O")[];
type PlayerTurn = "X" | "O";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = (gameState: GameState, playerTurn: PlayerTurn) => {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return gameState[index] === playerTurn;
    });
  });
};

function GameBoard() {
  const defaultGameState: GameState = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState<GameState>(defaultGameState);
  const playerTurn = useRef<PlayerTurn>("X");
  const [whoWon, setWhoWon] = useState<PlayerTurn | null>(null);

  useEffect(() => {
    setWhoWon(null);
  }, []);

  const handleBoxChange = (boxIndex: number) => {
    const newGameState = gameState.map((element, index) => {
      return index === boxIndex ? playerTurn.current : element;
    });

    setGameState(newGameState);
    if (checkWin(newGameState, playerTurn.current)) {
      setWhoWon(playerTurn.current);
    }

    playerTurn.current = playerTurn.current === "X" ? "O" : "X";
  };

  const resetGame = () => {
    setWhoWon(null);
    setGameState(defaultGameState);
  };

  return (
    <>
      <Box onChange={() => handleBoxChange(0)} value={gameState[0]} />
      <Box onChange={() => handleBoxChange(1)} value={gameState[1]} />
      <Box onChange={() => handleBoxChange(2)} value={gameState[2]} />
      <br />
      <Box onChange={() => handleBoxChange(3)} value={gameState[3]} />
      <Box onChange={() => handleBoxChange(4)} value={gameState[4]} />
      <Box onChange={() => handleBoxChange(5)} value={gameState[5]} />
      <br />
      <Box onChange={() => handleBoxChange(6)} value={gameState[6]} />
      <Box onChange={() => handleBoxChange(7)} value={gameState[7]} />
      <Box onChange={() => handleBoxChange(8)} value={gameState[8]} />

      {whoWon && (
        <>
          <h1>{`Player ${whoWon} won`}</h1>
          <button onClick={() => resetGame()}>Reset Game</button>
        </>
      )}
    </>
  );
}

export default GameBoard;
