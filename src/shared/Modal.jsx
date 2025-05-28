import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

/** 모달 컴포넌트
 * 
 * 부모 컴포넌트에서 ref를 이용해 open() 호출로 열 수 있음.
 * 
 * createPortal: 모달을 DOM의 #modal 위치에서 렌더링
 */
function Modal({ ref, children, buttonCaption }) {
  const dialog = useRef();

  //전달받은 ref props와 dialog 연결
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
