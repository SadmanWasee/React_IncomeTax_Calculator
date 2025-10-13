import React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

function ViewRebateAmount(props) {

  const threePercentOfIncome = props.income * 0.03;
  const fifteenPercentOfInvestment = props.totalInvestment * 0.15
  const Rebate = Math.min(threePercentOfIncome, fifteenPercentOfInvestment, 1000000)


  return (
    <div className='d-flex py-5 justify-content-center'>
      <table className='w-75 '>
        <thead>
          <th>Criteria</th>
          <th>Amount</th>
          <th>Rate</th>
          <th>Rebate</th>
        </thead>
        <tbody>
          <tr>
            <th>3% of income</th>
            <td>{props.income}</td>
            <td>3%</td>
            <td>{threePercentOfIncome}</td>
          </tr>
          <tr>
            <th>15% of Investment</th>
            <td>{props.totalInvestment}</td>
            <td>15%</td>
            <td>{fifteenPercentOfInvestment}</td>
          </tr>
          <tr>
            <th>10 Lac BDT</th>
            <td>1000000</td>
            <td>[N/A]</td>
            <td>1000000</td>
          </tr>
        </tbody>
        <caption className='text-center'>The lowest amount will be your Tax Rebate</caption>
      </table>
    </div>
  )
}

export default ViewRebateAmount