import React from "react";
import { calculateInvestmentResults, formatter, kakaoBank26SavingAccount } from "../../features/calculator/lib/investment";

function Chart({ inputData, styles }) {
  let resultData = kakaoBank26SavingAccount(inputData);
  
  const totalPrincipal = resultData.reduce((sum, data) => sum + data.moneyPerWeek, 0);
  const totalInterest = resultData.reduce((sum, data) => sum + data.interestValue, 0);
  const totalAmount = totalPrincipal + totalInterest; 

  let accumulatedTotal = 0;

  return (
    <table id={styles.result}>
      <thead>
        <tr>
          <th>Week</th>
          <th>Money</th>
          <th>IncreaseMoney</th>
          <th>Interest price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalPrice = data.moneyPerWeek + data.interestValue;
          accumulatedTotal += data.moneyPerWeek;

          return (
            <tr key={data.week}>
              <td>{data.week}</td>
              <td>{formatter.format(data.moneyPerWeek)}</td>
              <td>{formatter.format(accumulatedTotal)}</td>
              <td>{formatter.format(data.interestValue)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Chart;
