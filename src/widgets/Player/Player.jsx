import React from "react";
import styles from "./Player.module.css";

function Player() {
  const { player, text, content } = styles;

  return (
    <>
      <section id={content}>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
        <div id={player}>
          <h2>Welcome unknown entity</h2>
          <p>
            <input type={text} />
            <button>Set Name</button>
          </p>
        </div>
      </section>
    </>
  );
}

export default Player;
