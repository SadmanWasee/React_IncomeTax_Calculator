import React, { useContext } from 'react'
import { FormContext } from '../Context/AppContext'
import { categories } from '../Utils/AppUtils';

function ViewTaxAmount() {

  const { form, setFormData } = useContext(FormContext);
  let taxExemptionCategory6 = 375000;
  let annualIncome = 0;
  let total = 0;
  let taxPayable = 0;
  let taxAmount = {
    "bracket1": 0,
    "bracket2": 0,
    "bracket3": 0,
    "bracket4": 0,
    "bracket5": 0,
    "bracket6": 0
  }

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
    taxExemptionCategory6 = taxExemptionCategory6 + (50000 * form.numberOfDisabledChildren);
  }

  const taxExemptionLimit = {
    "generalTaxPayers": 375000,
    "women&seniorCitizens": 425000,
    "peopleWithDisabilities": 500000,
    "thirdGenderIndividuals": 500000,
    "warWoundedFreedomFighters": 525000,
    "parentOfADisabledChild": taxExemptionCategory6
  }

  const calculateTax = (annualIncome, taxExemption, taxAmount) => {

    if (annualIncome > taxExemption) {
      let taxedAmount = taxExemption

      if (annualIncome < (taxedAmount + 300000)) {
        taxAmount['bracket2'] = (annualIncome - taxedAmount) * 0.1
      } else {
        taxedAmount += 300000

        if (annualIncome < (taxedAmount + 400000)) {
          taxAmount['bracket3'] = (annualIncome - taxedAmount) * 0.15
          taxAmount['bracket2'] = 300000 * 0.10
        } else {
          taxedAmount += 400000

          if (annualIncome < (taxedAmount + 500000)) {
            taxAmount['bracket4'] = (annualIncome - taxedAmount) * 0.20
            taxAmount['bracket3'] = 400000 * 0.15
            taxAmount['bracket2'] = 300000 * 0.10
          } else {
            taxedAmount += 500000

            if (annualIncome < (taxedAmount + 2000000)) {
              taxAmount['bracket5'] = (annualIncome - taxedAmount) * 0.25
              taxAmount['bracket4'] = 500000 * 0.20
              taxAmount['bracket3'] = 400000 * 0.15
              taxAmount['bracket2'] = 300000 * 0.10
            } else {
              taxedAmount += 2000000

              taxAmount['bracket6'] = (annualIncome - taxedAmount) * 0.30
              taxAmount['bracket5'] = 2000000 * 0.25
              taxAmount['bracket4'] = 500000 * 0.20
              taxAmount['bracket3'] = 400000 * 0.15
              taxAmount['bracket2'] = 300000 * 0.10
            }
          }
        }
      }
    }

    total = taxAmount['bracket6'] + taxAmount['bracket5'] + taxAmount['bracket4'] + taxAmount['bracket3'] + taxAmount['bracket2'] + taxAmount['bracket1']

  }

  calculateTax(annualIncome, taxExemptionLimit[form.category], taxAmount)


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
                <td>{taxAmount["bracket1"]}</td>
              </tr>
              <tr>
                <td>Next 300,000</td>
                <td>10%</td>
                <td>{taxAmount["bracket2"]}</td>
              </tr>
              <tr>
                <td>Next 400,000</td>
                <td>15%</td>
                <td>{taxAmount["bracket3"]}</td>
              </tr>
              <tr>
                <td>Next 500,000</td>
                <td>20%</td>
                <td>{taxAmount["bracket4"]}</td>
              </tr>
              <tr>
                <td>Next 2,000,000</td>
                <td>25%</td>
                <td>{taxAmount["bracket5"]}</td>
              </tr>
              <tr>
                <td>Above 3,575,000</td>
                <td>30%</td>
                <td>{taxAmount["bracket6"]}</td>
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