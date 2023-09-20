const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PKR',
  minimumFractionDigits : 2,
  maximumFractionDigits : 2,
})


const ResultsTable = ({ results }) => {
  return (
    <table className="result">
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
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.savingsEndOfYear)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>{formatter.format(result.savingsEndOfYear - result.initialInvestment - result.yearlyContribution * result.year)}</td>
            <td>{formatter.format(result.initialInvestment + result.yearlyContribution * result.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
