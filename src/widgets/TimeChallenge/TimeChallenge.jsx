import React, { useRef, useState } from "react";
import ResultModal from "../../features/minigame/ui/ResultModal";

function TimeChallenge({ title, targetTime, styles }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStared, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {timerStared && <ResultModal ref={dialog} targetTime={targetTime} result="lost" styles={styles} />}
      <section className={styles.challenge}>
        <h2>{title}</h2>
        {timeExpired && <p>you lost</p>}
        <p className={styles["challenge-time"]}>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStared ? handleStop : handleStart}>{timerStared ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timeExpired ? "active" : null}>{timerStared ? "Time is running" : "Time inactive"}</p>
      </section>
    </>
  );
}

export default TimeChallenge;
