import { useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";

function App() {
  const [userInput, setUserInput] = useState({
    INITIAL_INVESTMENT: "",
    ANNUAL_INVESTMENT: "",
    EXPECTED_RETURN: "",
    DURATION: "",
  });

  function handleInputChange(name, value) {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  

  return (
    <>
      <Header inputValues={userInput} onInputChange={handleInputChange} />
      <Chart inputData={userInput} />
    </>
  );
}

export default App;
