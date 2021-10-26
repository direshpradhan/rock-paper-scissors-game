import React, { useState } from "react";

export const Game = () => {
  const [startGame, setStartGame] = useState(false);
  return (
    <>
      {startGame ? (
        <h2>Game active</h2>
      ) : (
        <>
          <h2>Game not started</h2>
          <button onClick={() => setStartGame(true)}>Start Game</button>
        </>
      )}
    </>
  );
};
