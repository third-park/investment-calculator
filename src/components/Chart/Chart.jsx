import React from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

function Chart({ inputData }) {
  let resultData = calculateInvestmentResults(inputData);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Chart;
