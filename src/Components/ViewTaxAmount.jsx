import React, { useContext } from 'react'
import { FormContext } from '../Context/AppContext'
import { categories, taxBrackets, taxExemptionLimit} from '../Utils/AppUtils';


function ViewTaxAmount() {

  const { form, setFormData } = useContext(FormContext);
  let annualIncome = 0;
  let total = 0;
  let taxPayable = 0;

  if (form.incomeType == "0") {
    let income = form.income * 12
    annualIncome = income;
  } else {
    annualIncome = form.income
  }

  if (form.isNewTaxPayer == "0") {
    taxPayable = 1000
  } else {
    taxPayable = 5000
  }


  if (form.category == "parentOfADisabledChild") {
    taxExemptionLimit["parentOfADisabledChild"] = taxExemptionLimit["parentOfADisabledChild"] + (50000 * form.numberOfDisabledChildren);
  }



  const calculateTax = (annualIncome, taxExemption, taxBrackets) => {

    let incomeLeft = annualIncome;

    if (incomeLeft > taxExemption) {

      incomeLeft = incomeLeft - taxExemption
      let loopCount = taxBrackets.length

      for (let i = 0; i < loopCount; i++) {

        if (i == 0) {
          continue;
        }

        if (i === taxBrackets.length - 1) {
          taxBrackets[i].tax = incomeLeft * taxBrackets[i].rate
          incomeLeft = 0;
        } else {
          if (incomeLeft > taxBrackets[i].limit) {
            taxBrackets[i].tax = taxBrackets[i].limit * taxBrackets[i].rate
            incomeLeft = incomeLeft - taxBrackets[i].limit
          } else {
            taxBrackets[i].tax = incomeLeft * taxBrackets[i].rate
            incomeLeft = 0
          }
        }

        if (incomeLeft <= 0) {
          break;
        }

      }

      for (let i = 0; i < loopCount; i++) {
        total += taxBrackets[i].tax
      }

    }

  }

  calculateTax(annualIncome, taxExemptionLimit[form.category], taxBrackets)

  return (
    <>
      <div className='w-100 pt-5 text-center'>
        <h2>Tax Details</h2>
        <div className='text-start pt-5'>
          <p>Income: {annualIncome} BDT</p>
          <p>Category: {categories[form.category]}</p>
          <p>Tax Exemption Limit: {taxExemptionLimit[form.category]} BDT</p>
        </div>
        <div className="d-flex flex-column w-100 align-items-center">
          <table className='text-start'>
            <thead>
              <tr>
                <th>Annual Taxable Income (BDT)</th>
                <th>Tax Rate (%)</th>
                <th>Amount of tax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to {taxExemptionLimit[form.category]}</td>
                <td>0%</td>
                <td>{taxBrackets[0].tax}</td>
              </tr>
              <tr>
                <td>Next 300,000</td>
                <td>10%</td>
                <td>{taxBrackets[1].tax}</td>
              </tr>
              <tr>
                <td>Next 400,000</td>
                <td>15%</td>
                <td>{taxBrackets[2].tax}</td>
              </tr>
              <tr>
                <td>Next 500,000</td>
                <td>20%</td>
                <td>{taxBrackets[3].tax}</td>
              </tr>
              <tr>
                <td>Next 2,000,000</td>
                <td>25%</td>
                <td>{taxBrackets[4].tax}</td>
              </tr>
              <tr>
                <td>Above 3,575,000</td>
                <td>30%</td>
                <td>{taxBrackets[5].tax}</td>
              </tr>
              <tr>
                <td colSpan='2'>Minimum tax payable in BDT:</td>
                <td>{taxPayable}</td>
              </tr>
              <tr>
                <td colSpan='2'>Total tax in BDT: </td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTaxAmount