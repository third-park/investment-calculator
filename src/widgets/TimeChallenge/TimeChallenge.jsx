import React, { useRef, useState } from "react";
import ResultModal from "../../features/minigame/ui/ResultModal";

function TimeChallenge({ title, targetTime, styles }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevRemaining => prevRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} styles={styles} remaining={timeRemaining} onReset={handleReset} />
      <section className={styles.challenge}>
        <h2>{title}</h2>
        <p className={styles["challenge-time"]}>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? "active" : null}>{timerIsActive ? "Time is running" : "Time inactive"}</p>
      </section>
    </>
  );
}

export default TimeChallenge;
