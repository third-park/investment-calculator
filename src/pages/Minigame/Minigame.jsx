import React from "react";
import Player from "../../widgets/Player/Player";
import TimeChallenge from "../../widgets/TimeChallenge/TimeChallenge";
import styles from "./Minigame.module.css";

function Minigame() {
  return (
    <>
      <Player />
      <div id={styles.challenges}>
        <TimeChallenge title="Easy" targetTime={1} styles={styles} />
        <TimeChallenge title="Not easy" targetTime={5} styles={styles} />
        <TimeChallenge title="Getting tough" targetTime={10} styles={styles} />
        <TimeChallenge title="Pros only" targetTime={15} styles={styles} />
      </div>
    </>
  );
}

export default Minigame;
