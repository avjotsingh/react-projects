import { useState } from "react";

import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult/InvestmentResult";
import Header from "./components/Header/Header";

function App() {
  const [yearlyInvestments, setYearlyInvestments] = useState([]);

  const resetCalculation = () => {
    setYearlyInvestments([]);
  };

  const calculateInvestments = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlySavings"];
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyInvestments(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm
        onResetInvestments={resetCalculation}
        onCalculateInvestments={calculateInvestments}
      />

      {yearlyInvestments.length === 0 && <p>No investments calculated yet.</p>}
      {yearlyInvestments.length > 0 && (
        <InvestmentResult data={yearlyInvestments} initialInvestment={yearlyInvestments[0].savingsEndOfYear - yearlyInvestments[0].yearlyInterest - yearlyInvestments[0].yearlyContribution} />
      )}
    </div>
  );
}

export default App;
