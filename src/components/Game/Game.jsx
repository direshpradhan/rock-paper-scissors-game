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
          <h2>Let's Play</h2>
          <img
            className={`${styles.img_cover}`}
            src="https://i.imgur.com/7QhyRrT.png"
            alt="Game Cover"
          />

          <button
            className={`${styles.btn_start}`}
            onClick={() => setStartGame(true)}
          >
            Start Game
          </button>
        </>
      )}
    </>
  );
};
