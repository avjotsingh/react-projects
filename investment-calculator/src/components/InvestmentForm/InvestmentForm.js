import { useState } from "react";
import styles from "./InvestmentForm.module.css";

function InvestmentForm(props) {
  const [userInput, setUserInput] = useState({});

  const onCurrentSavingsChange = (event) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      currentSavings: Number(event.target.value),
    }));
  };

  const onYearlySavingsChange = (event) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      yearlySavings: Number(event.target.value),
    }));
  };

  const onInterestChange = (event) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      expectedInterest: Number(event.target.value),
    }));
  };

  const onDurationChange = (event) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      duration: Number(event.target.value),
    }));
  };

  const onReset = (event) => {
    setUserInput({});
    props.onResetInvestments();
  };

  const onCalculate = (event) => {
    event.preventDefault();
    props.onCalculateInvestments(userInput);
  };

  return (
    <form className={styles["form"]} onSubmit={onCalculate}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={onCurrentSavingsChange}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={onYearlySavingsChange}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={onInterestChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={onDurationChange} />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]} onClick={onReset}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;
