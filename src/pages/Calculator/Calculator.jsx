import React from "react";
import mainImg from "../../assets/investment-calculator-logo.png";
import { useState } from "react";
import Chart from "../../widgets/CalculatorBlock/Chart";
import UserInput from "../../widgets/CalculatorBlock/UserInput";

import styles from "./Calculator.module.css";

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
      <div id={styles.header} style={{'textAlign': 'center', 'margin': 3 +'rem auto'}}>
        <h1>kakao 26week saving account</h1>
      </div>
      <UserInput userInput={userInput} onChange={handleChange} styles={styles}/>
      {!inputIsValid && <p className={styles.center}>week를 0보다 크게 설정해주세요.</p>}
      {inputIsValid && <Chart inputData={userInput} styles={styles}/>}
    </>
  );
}

export default Calculator;
