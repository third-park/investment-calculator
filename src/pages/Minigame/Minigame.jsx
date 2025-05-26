import React from "react";
import Player from "../../widgets/Player/Player";
import styles from "./Minigame.module.css";

function Minigame() {
  const { challenges } = styles;
  return (
    <>
      <Player />
      <div id={challenges}></div>
    </>
  );
}

export default Minigame;
