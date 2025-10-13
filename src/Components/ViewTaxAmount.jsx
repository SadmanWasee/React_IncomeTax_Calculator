import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../Context/AppContext'
import { categories, taxBrackets, taxExemptionLimit } from '../Utils/data'
import { TaxContext } from '../Context/AppContext';


function ViewTaxAmount() {

  const { form, setFormData } = useContext(FormContext);
  const { totalTax, setTotalTax } = useContext(TaxContext);
  let annualIncome = 0;
  let total = 0;

  let [taxPayable, setTaxPayable] = useState(0);

  if (form.incomeType == "0") {
    let income = form.income * 12
    annualIncome = income;
  } else {
    annualIncome = form.income
  }

  useEffect(() => {
    if (form.isNewTaxPayer == "0") {
      setTaxPayable(1000)
    } else {
      setTaxPayable(5000)
    }
  })



  if (form.category == "parentOfADisabledChild") {
    taxExemptionLimit["parentOfADisabledChild"] = taxExemptionLimit["parentOfADisabledChild"] + (50000 * form.numberOfDisabledChildren);
  }



  const calculateTax = (annualIncome, taxExemption) => {

    let incomeLeft = annualIncome;

    if (incomeLeft > taxExemption) {

      incomeLeft = incomeLeft - taxExemption
      let loopCount = taxBrackets.length

      for (let i = 0; i < loopCount; i++) {

        if (i == 0) {
          continue;
        }

        if (incomeLeft > taxBrackets[i].limit) {
          taxBrackets[i].tax = taxBrackets[i].limit * taxBrackets[i].rate
          total += taxBrackets[i].tax
          incomeLeft = incomeLeft - taxBrackets[i].limit
        } else {
          taxBrackets[i].tax = incomeLeft * taxBrackets[i].rate
          total += taxBrackets[i].tax
          incomeLeft = 0
          break;
        }

      }

    }
    if(total > taxPayable){
      setTotalTax(total)
    }
    else{
      setTotalTax(taxPayable)
    }

  }


  calculateTax(annualIncome, taxExemptionLimit[form.category])


  return (
    <>
      <h2 className='text-center pt-5'>Tax Details</h2>
      <div className='w-100 pt-5 px-5 row '>
        <div className='col-6'>
          <table className='w-75'>
            <thead>
              <tr>
                <th className='text-center' colSpan='2'>Tax Exemption based on category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Income:</th>
                <td>{annualIncome}</td>
              </tr>
              <tr>
                <th>Category:</th>
                <td>{categories[form.category]}</td>
              </tr>
              <tr>
                <th>Tax Exemption Limit:</th>
                <td>{taxExemptionLimit[form.category]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className='text-start w-100'>
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
                <td>{totalTax}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTaxAmount