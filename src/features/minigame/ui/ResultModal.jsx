import React from "react";

function ResultModal({ ref, result, targetTime, styles }) {
  return (
    <dialog ref={ref} className={styles['result-modal']}>
      <h2>You {result}</h2>
      <p>
        The target time was <srtong>{targetTime} seconds.</srtong>
      </p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
