import styles from './InvestmentResult.module.css';

const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

function InvestmentResult(props) {

    return <table className={styles["result"]}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(d => (
        <tr key={d.year}>
        <td>{d.year}</td>
        <td>{formatter.format(d.savingsEndOfYear)}</td>
        <td>{formatter.format(d.yearlyInterest)}</td>
        <td>{formatter.format(d.savingsEndOfYear - props.initialInvestment - d.yearlyContribution * d.year)}</td>
        <td>{formatter.format(props.initialInvestment + d.yearlyContribution * d.year)}</td>
      </tr>
      ))}
    </tbody>
  </table>
}

export default InvestmentResult;