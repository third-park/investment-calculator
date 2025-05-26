import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const { header } = styles;

  return (
    <header id={header}>
      <h1>리액트 프로젝트</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">계산기</Link>
        <Link to="/minigame">미니게임</Link>
      </nav>
    </header>
  );
}

export default Header;
