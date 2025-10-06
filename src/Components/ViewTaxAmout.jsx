import React from 'react'

function ViewTaxAmout() {
  return (
    <>
      <div className='w-100 pt-5 text-center'>
        <h2>Tax Details</h2>
        <div className='text-start pt-5'>
          <p>Category:</p>
          <p>Tax exemption limit:</p>
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
                <td>Up to 375,000</td>
                <td>0%</td>
                <td></td>
              </tr>
              <tr>
                <td>Next 300,000</td>
                <td>10%</td>
                <td></td>
              </tr>
              <tr>
                <td>Next 400,000</td>
                <td>15%</td>
                <td></td>
              </tr>
              <tr>
                <td>Next 500,000</td>
                <td>20%</td>
                <td></td>
              </tr>
              <tr>
                <td>Next 2,000,000</td>
                <td>25%</td>
                <td></td>
              </tr>
              <tr>
                <td>Above 3,575,000</td>
                <td>30%</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan='2'>Minimum tax payable in BDT:</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan='2'>Total tax in BDT:</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTaxAmout