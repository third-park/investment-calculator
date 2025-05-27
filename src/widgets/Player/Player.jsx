import React, { useRef, useState } from "react";
import styles from "./Player.module.css";

function Player() {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState(null);
  
  const { player, text, content } = styles;

  const handleClick = () => {
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <>
      <section id={content}>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
        <div id={player}>
          <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
          <p>
            <input type={text} ref={playerName} name="playerName"/>
            <button onClick={handleClick}>Set Name</button>
          </p>
        </div>
      </section>
    </>
  );
}

export default Player;
