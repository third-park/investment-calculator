import React, { useImperativeHandle, useRef } from "react";

function ResultModal({ ref, result, targetTime, styles }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }); //ref객체와 다른 컴포넌트에 메서드나 프로퍼티 등 노출해야하는 내용을 그룹화하는 객체를 반환하는 함수를 인수로 받음

  return (
    <dialog ref={dialog} className={styles["result-modal"]}>
      <h2>You {result}</h2>
      <p>
        The target time was <srtong>{targetTime} seconds.</srtong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
