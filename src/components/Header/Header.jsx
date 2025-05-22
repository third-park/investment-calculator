import React from "react";
import mainImg from "../../assets/investment-calculator-logo.png";

function Header({ inputValues, onInputChange }) {
  return (
    <div id="header">
      <img src={mainImg} alt="dd" />
      <h1>kakao 26week saving account</h1>
    </div>
  );
}

export default Header;
