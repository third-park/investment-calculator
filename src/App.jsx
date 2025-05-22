import { useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import UserInput from "./components/UserInput/UserInput";

function App() {
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
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">week를 0보다 크게 설정해주세요.</p>}
      {inputIsValid && <Chart inputData={userInput} />}
    </>
  );
}

export default App;
