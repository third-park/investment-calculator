import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  let {background, loadingText} = styles;
  return (
    <div className={background}>
      <img src="" alt="" />
      <span className={loadingText}>Loading...</span>
    </div>
  );
}

export default Loading;
