import React, { useState } from "react";
import styles from "./Game.module.css";

export const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const images = {
    Rock: "https://i.imgur.com/TONXH9s.png",
    Paper: "https://i.imgur.com/t2154qR.png",
    Scissors: "https://i.imgur.com/SXstPKk.png",
  };

  const getWinner = (player1, player2) => {
    if (player1 === player2) {
      return "Tie";
    }

    switch (player1) {
      case "Rock":
        if (player2 === "Scissors") {
          return player1;
        } else {
          return player2;
        }

      case "Paper":
        if (player2 === "Scissors") {
          return player2;
        } else {
          return player1;
        }

      case "Scissors":
        if (player2 === "Rock") {
          return player2;
        } else {
          return player1;
        }

      default:
        break;
    }
  };

  const winner = getWinner(userChoice, computerChoice);

  return (
    <>
      {startGame ? (
        <>
          <div className={`${styles.img_container}`}>
            <div className={`${styles.player}`}>
              <h2>Player</h2>
              {userChoice ? (
                <span>
                  <img
                    className={`${styles.img_object}`}
                    src={images[userChoice]}
                    alt={userChoice}
                  />
                  <h3>{userChoice}</h3>
                </span>
              ) : (
                <div className={`${styles.img_players}`}>
                  {Object.keys(images).map((img) => {
                    return (
                      <span
                        key={img}
                        onClick={() => {
                          setUserChoice(img);
                          setComputerChoice(
                            Object.keys(images)[
                              Math.floor(
                                Math.random() * Object.keys(images).length
                              )
                            ]
                          );
                        }}
                      >
                        <img
                          className={`${styles.img_object}`}
                          src={images[img]}
                          alt={img}
                        />
                        <h3>{img}</h3>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            <div className={`${styles.computer}`}>
              <h2>Computer</h2>
              {computerChoice ? (
                <>
                  <img
                    className={`${styles.img_object}`}
                    src={images[computerChoice]}
                    alt={computerChoice}
                  />
                  <h3>{computerChoice}</h3>
                </>
              ) : (
                <img
                  className={`${styles.img_object}`}
                  src="https://i.imgur.com/CyvHqQH.png"
                  alt="Computer"
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.img_players}`}>
            {Object.keys(images).map((img) => {
              return (
                <span key={img}>
                  <img
                    className={`${styles.img_object}`}
                    src={images[img]}
                    alt={img}
                  />
                </span>
              );
            })}
          </div>

          <button
            className={`${styles.btn_start}`}
            onClick={() => setStartGame(true)}
          >
            Let's Play
          </button>
        </>
      )}

      <div>
        {userChoice && computerChoice && (
          <>
            {winner === userChoice ? (
              <h1>Player Wins</h1>
            ) : (
              <h1>Computer Wins</h1>
            )}
            {winner === "Tie" && <h1>Match Draw</h1>}

            <button
              className={`${styles.btn_start}`}
              onClick={() => {
                setUserChoice(null);
                setComputerChoice(null);
              }}
            >
              Replay
            </button>
            <button
              className={`${styles.btn_start}`}
              onClick={() => {
                setStartGame(false);
                setUserChoice(null);
                setComputerChoice(null);
              }}
            >
              Go to Homepage
            </button>
          </>
        )}
      </div>
    </>
  );
};
