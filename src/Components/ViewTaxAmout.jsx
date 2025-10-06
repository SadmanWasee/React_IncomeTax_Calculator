import React, { useContext } from 'react'
import { FormContext } from '../Context/AppContext'

function ViewTaxAmout() {

  const { form, setFormData } = useContext(FormContext);
  let taxExemptionCategory6 = 375000;
  let annualIncome = 0;
  let total = 0 ;
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
    let income = parseFloat(form.income);
    income = income * 12
    annualIncome = income;
  } else {
    annualIncome = parseFloat(form.income)
  }

  if (form.isNewTaxPayer == "0") {
    taxPayable = 1000
  } else {
    taxPayable = 5000
  }

  const category = {
    "1": "General taxpayers",
    "2": "Women & Senior Citizens (65+)",
    "3": "People with Disabilities",
    "4": "Third-Gender Individuals",
    "5": "War-wounded Freedom Fighters",
    "6": "Parent of a Disabled Child"
  }


  if (form.categoryNO == "6") {
    taxExemptionCategory6 = taxExemptionCategory6 + (50000 * parseFloat(form.numberOfDisabledChildren));
  }


  const taxExemptionLimit = {
    "1": 375000,
    "2": 425000,
    "3": 500000,
    "4": 500000,
    "5": 525000,
    "6": String(taxExemptionCategory6)
  }

  const calculateTax = (annualIncome, taxPayable, taxExemption, taxAmount) => {

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

    total = taxPayable + taxAmount['bracket6'] + taxAmount['bracket5'] + taxAmount['bracket4'] + taxAmount['bracket3'] + taxAmount['bracket2'] + taxAmount['bracket1']

  }



calculateTax(annualIncome, taxPayable, taxExemptionLimit[form.categoryNO], taxAmount)


return (
  <>
    <div className='w-100 pt-5 text-center'>
      <h2>Tax Details</h2>
      <div className='text-start pt-5'>
        <p>Income: {annualIncome} BDT</p>
        <p>Category: {category[form.categoryNO]}</p>
        <p>Tax exemption limit: {taxExemptionLimit[form.categoryNO]} BDT</p>
      </div>
      <div className="d-flex flex-column w-100 align-items-center">
        <table className='text-start'>
          <tr>
            <th>Annual Taxable Income (BDT)</th>
            <th>Tax Rate (%)</th>
            <th>Amount of tax</th>
          </tr>
          <tr>
            <td>Up to 375,000</td>
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
        </table>
      </div>
    </div>
  </>
)
}

export default ViewTaxAmout