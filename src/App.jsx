import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment : 12000,
    annualInvestment: 1400,
    expectedReturn : 6,
    duration: 12
});

const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue){
  setUserInput(previousUserInput =>{
      return{
          ...previousUserInput,
          [inputIdentifier]: +newValue
      }
  })
}
  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleChange}></UserInput>
    {!inputIsValid && <p className="center">Please enter an available duration, greater than zero!</p>}
    {inputIsValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App
