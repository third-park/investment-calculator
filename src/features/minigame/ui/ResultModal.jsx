import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, styles, remaining, onReset }) {
  const dialog = useRef();
  const score = Math.round((1 - remaining / (targetTime * 1000)) * 100);
  const userResult = remaining <= 0 ? 'lost' : `win, Score: ${score}`;
  const formattedTime = (remaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }); //ref객체와 다른 컴포넌트에 메서드나 프로퍼티 등 노출해야하는 내용을 그룹화하는 객체를 반환하는 함수를 인수로 받음

  return createPortal(
    <dialog ref={dialog} className={styles["result-modal"]} onClose={onReset}>
      <h2>You {userResult}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

export default ResultModal;
