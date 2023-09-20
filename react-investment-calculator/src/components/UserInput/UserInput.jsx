import { useState } from "react";

const intialValues = {
    "current-saving": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

const UserInput = ({onCalculate}) => {


  const [userInput, setUserInput] = useState({
    "current-saving": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onCalculate(userInput)
  };

  const resetHandler = () => {
    setUserInput(intialValues);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-saving"]}
            onChange={(event) => {
              inputChangeHandler("current-saving", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
              
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
