import { useState } from "react";

import InputField from "./Components/inputField";
import Header from "./Components/Header";
import Results from "./Components/Results";

function App() {
  const [useInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120,
    expectedReturn: 6,
    duration: 10,
  });

  const inputisVaild = useInput.duration >= 1;

  function onChangeHandle(InputIndifier, newValue) {
    // console.log("sdfer");
    setUserInput((previousValue) => {
      return { ...previousValue, [InputIndifier]: +newValue };
    });
  }
  // const [initalInvestment, setInitalInvestment] = useState(0);
  // const [annualInvestment, setAnnualInvestment] = useState(0);
  // const [returnData, setReturnData] = useState(0);
  // const [Duration, setDuration] = useState(0);

  // function handleOnChangeInital(event) {
  //   setInitalInvestment(event.target.value);
  // }

  // function handleOnChangeAnnual(event) {
  //   setAnnualInvestment(event.target.value);
  // }

  // function handleOnChangeReturn(event) {
  //   setReturnData(event.target.value);
  // }

  // function handleOnChangeDuration(event) {
  //   setDuration(event.target.value);
  // }

  return (
    <>
      <Header />
      <InputField onChange={onChangeHandle} useInput={useInput} />

      {!inputisVaild && <p>Please enter Duration Graeater then Zero..</p>}
      {inputisVaild && <Results useInput={useInput} />}

      {/* <div id="user-input">
          <label for="Inital">Inital Investment</label>
          <input
            type="number"
            id="Inital"
            onChange={handleOnChangeInital}
            value={initalInvestment}
          ></input>
          <label for="user-input1">Inital Investment</label>
          <input
            type="number"
            id="user-input1"
            onChange={handleOnChangeAnnual}
            value={annualInvestment}
          ></input>
          <label for="user-input2">Inital Investment</label>
          <input
            type="number"
            id="user-input2"
            onChange={handleOnChangeReturn}
            value={returnData}
          ></input>
          <label for="user-input3">Inital Investment</label>
          <input
            type="number"
            id="user-input3"
            onChange={handleOnChangeDuration}
            value={Duration}
          ></input>
        </div> */}

      {/* <div>
        <table>
          <thead>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest(Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </thead>
          <tbody>
            <td>
              <calculateInvestmentResults
                initialInvestment={initalInvestment}
                annualInvestment={annualInvestment}
                expectedReturn={returnData}
                duration={Duration}
              />
            </td>
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default App;
