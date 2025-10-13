import React, { useContext, useEffect, useReducer, useState } from 'react'
import { FormContext, TaxContext } from '../Context/AppContext'
import { Button } from '@mui/material';
import ViewRebateAmount from './ViewRebateAmount';

function TaxRebateCalculatorForm() {

  const { totalTax, setTotalTax } = useContext(TaxContext);
  const { form, setForm } = useContext(FormContext)
  const [totalRebate, setTotalRebate] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [isViewRebateAmount, setIsViewRebateAmount] = useState(false)



  const rebateInitialState = {
    dps: 0,
    govtSecurities: 0,
    mutualFund: 0,
    stockMarket: 0
  }

  const investmentAmount = {
    dps: 0,
    govtSecurities: 0,
    mutualFund: 0,
    stockMarket: 0
  };

  const rebateReducer = (state, action) => {
    switch (action.type) {
      case 'dps':
        if (action.value > 120000) return { ...state, dps: 120000 }
        else return { ...state, dps: action.value }
      case 'govtSecurities':
        if (action.value > 500000) return { ...state, govtSecurities: 500000 }
        else return { ...state, govtSecurities: action.value }
      case 'mutualFund':
        if (action.value > 500000) return { ...state, mutualFund: 500000 }
        else return { ...state, mutualFund: action.value }
      case 'stockMarket':
        return { ...state, stockMarket: action.value }
    }

  }

  const investmentReducer = (state, action) => {
    switch (action.type) {
      case 'dps':
        return { ...state, dps: action.value }
      case 'govtSecurities':
        return { ...state, govtSecurities: action.value }
      case 'mutualFund':
        return { ...state, mutualFund: action.value }
      case 'stockMarket':
        return { ...state, stockMarket: action.value }

    }
  }

  const [rebate, dispatch] = useReducer(rebateReducer, rebateInitialState);
  const [investment, investmentDispatch] = useReducer(investmentReducer, investmentAmount)


  useEffect(() => {

    const values = Object.values(rebate)
    const total = values.reduce((acc, v) => acc + (Number(v) || 0), 0)
    setTotalRebate(total)

  }, [rebate])

  useEffect(() => {

    const values = Object.values(investment)
    const total = values.reduce((acc, v) => acc + (Number(v) || 0), 0)

    setTotalInvestment(total)

  }, [investment])

  return (
    <div className='py-5 px-5 w-100'>
      <h1 className='text-center py-5'>Tax Rebate Calculator</h1>
      <div className="w-100 text-start clearfix">
        <table className='w-100 text-center rebate-table'>
          <thead>
            <tr >
              <th className='col-3'>Criteria </th>
              <th className='col-3'>Investment Amount</th>
              <th className='col-3'>Maximum Rebate Amount Allowed</th>
              <th className='col-3'>Rebate Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='col-3'>DPS</td>
              <td className='col-3'>
                <input
                  type="number"
                  name='dpsInvestmentAmount'
                  className='rebate-input-design'
                  placeholder='Enter the amount'
                  disabled={isViewRebateAmount}
                  onChange={(e) => {
                    dispatch({ type: 'dps', value: e.target.value })
                    investmentDispatch({ type: 'dps', value: e.target.value })
                  }}
                />
              </td>
              <td className='col-3'>
                <input type="number"
                  readOnly
                  disabled
                  value={120000.00}
                  className='rebate-input-design'
                />
              </td>
              <td className='col-3'>
                <input type="number"
                  readOnly
                  disabled
                  value={rebate.dps}
                  className='rebate-input-design'
                />
              </td>
            </tr>
            <tr>
              <td className='col-3'>Govt. Securities</td>
              <td className='col-3'>
                <input
                  type="number"
                  name='govtSecuritiesInvestmentAmount'
                  className='rebate-input-design'
                  placeholder='Enter the amount'
                  disabled={isViewRebateAmount}
                  onChange={(e) => {
                    dispatch({ type: 'govtSecurities', value: e.target.value })
                    investmentDispatch({ type: 'govtSecurities', value: e.target.value })
                  }}
                />
              </td>
              <td className='col-3'>
                <input
                  type="number"
                  readOnly
                  disabled
                  value={500000.00}
                  className='rebate-input-design'
                />
              </td>
              <td className='col-3'>
                <input
                  type="number"
                  readOnly
                  disabled
                  value={rebate.govtSecurities}
                  className='rebate-input-design'
                />
              </td>
            </tr>
            <tr>
              <td className='col-3'>Mutual Fund/Unit Fund</td>
              <td className='col-3'>
                <input
                  type="number"
                  name='mutualFundInvestmentAmount'
                  className='rebate-input-design'
                  placeholder='Enter the amount'
                  disabled={isViewRebateAmount}
                  onChange={(e) => {
                    dispatch({ type: 'mutualFund', value: e.target.value });
                    investmentDispatch({ type: 'mutualFund', value: e.target.value })
                  }}
                />
              </td>
              <td className='col-3'>
                <input
                  type="number"
                  readOnly
                  disabled
                  value={500000.00}
                  className='rebate-input-design'
                />
              </td>
              <td className='col-3'>
                <input
                  type="number"
                  readOnly
                  disabled
                  value={rebate.mutualFund}
                  className='rebate-input-design'
                />
              </td>
            </tr>

            <tr>
              <td className='col-3'>Stock Market</td>
              <td className='col-3'>
                <input
                  type="number"
                  name='stockMarketInvestmentAmount'
                  className='rebate-input-design'
                  placeholder='Enter the amount'
                  disabled={isViewRebateAmount}
                  onChange={(e) => {
                    dispatch({ type: "stockMarket", value: e.target.value });
                    investmentDispatch({ type: "stockMarket", value: e.target.value })
                  }}
                />
              </td>
              <td className='col-3'>
                <input
                  type="text"
                  readOnly
                  disabled
                  value="N/A"
                  className='rebate-input-design'
                />
              </td>
              <td className='col-3'>
                <input
                  type="number"
                  readOnly
                  disabled
                  value={rebate.stockMarket}
                  className='rebate-input-design'
                />
              </td>
            </tr>
            <tr>
              <td className='col-3'><strong>Total investment in the taxable year (BDT)</strong></td>
              <td className='col-3'>
                <input
                  type="number"
                  name='TotalInvestment'
                  readOnly
                  disabled
                  value={totalInvestment}
                  className='rebate-input-design total-row'
                />
              </td>
              <td className='col-3'></td>
              <td className='col-3'>
                <input
                  type="number"
                  name='TotalRebate'
                  readOnly
                  disabled
                  value={totalRebate}
                  className='rebate-input-design total-row'
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button className='float-end'
          sx={{ m: 2 }}
          onClick={() => { setIsViewRebateAmount(true) }}
          type='submit'
          variant='contained'
          color='primary'>
          Submit
        </Button>
      </div>
      {
        isViewRebateAmount ?
          <ViewRebateAmount
            totalInvestment={totalInvestment}
            income={form.incomeType == '0' ?
              form.income * 12 :
              form.income}
          /> : <></>
      }

    </div>
  )

}
export default TaxRebateCalculatorForm