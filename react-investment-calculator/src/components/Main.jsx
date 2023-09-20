import Header from "./Header/Header";
import UserInput from "./UserInput/UserInput";
import ResultsTable from "./ResultsTable/ResultsTable";

import { useState } from "react";


const Main = () => {

    const [results, setResults] = useState([]);
    const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        const yearlyData = []; // per-year results
        let investment = parseFloat(userInput["current-saving"]);
        let currentSavings = +userInput["current-saving"]; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            initialInvestment : investment,
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution
          });
        }
    
        setResults(yearlyData)
      };

      
    
      return (
        <>
            <Header/>
            <UserInput  onCalculate={(userInput) => calculateHandler(userInput)}/>
            <ResultsTable results={results}/>
        </>
      );
    }


export default Main