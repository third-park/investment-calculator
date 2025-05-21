import React from "react";
import UserInput from "../UserInput/UserInput";
import mainImg from "../../assets/investment-calculator-logo.png";

function Header({ inputValues, onInputChange }) {
  return (
    <div id="header">
      <img src={mainImg} alt="dd" />
      <h1>React Investment Calculator</h1>
      <div id="user-input">
        <div className="input-group">
          <UserInput type="number" value={inputValues.INITIAL_INVESTMENT} name="INITIAL_INVESTMENT" onChange={onInputChange} />
          <UserInput type="number" value={inputValues.ANNUAL_INVESTMENT} name="ANNUAL_INVESTMENT" onChange={onInputChange} />
          <UserInput type="number" value={inputValues.EXPECTED_RETURN} name="EXPECTED_RETURN" onChange={onInputChange} />
          <UserInput type="number" value={inputValues.DURATION} name="DURATION" onChange={onInputChange} />
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default Header;
