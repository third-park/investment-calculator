import React from "react";
import mainImg from "../../assets/investment-calculator-logo.png";
import { useState } from "react";
import Chart from "../Chart/Chart";
import UserInput from "../UserInput/UserInput";

function Calculator() {
  const [userInput, setUserInput] = useState({
    initialPrice: 0,
    interestRate: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <div id="header" style={{'textAlign': 'center', 'margin': 3 +'rem auto'}}>
        <h1>kakao 26week saving account</h1>
      </div>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">week를 0보다 크게 설정해주세요.</p>}
      {inputIsValid && <Chart inputData={userInput} />}
    </>
  );
}

export default Calculator;
