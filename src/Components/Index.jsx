import React, { useEffect, useState } from 'react'
import { FormContext } from '../Context/AppContext';
import Form from './Form';
import ViewTaxAmount from './ViewTaxAmount';
import { TaxContext } from '../Context/AppContext';
import TaxRebateCalculatorForm from './TaxRebateCalculatorForm';

function Index() {

  const [isShowTaxAmount, setIsShowTaxAmount] = useState(false);
  const [isShowRebate, setIsShowRebate] = useState(false)
  const [form, setFormData] = useState({
    income: 0,
    incomeType: "1",
    categoryNo: "1",
    isNewTaxPayer: null,
    numberOfDisabledChildren: null
  })
  const [totalTax, setTotalTax] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Income Tax Calculator</h1>

        <FormContext.Provider
          value={{
            form,
            setFormData
          }}
        >
          <Form
            toggler={{
              toggle: isShowTaxAmount,
              setToggle: setIsShowTaxAmount
            }}
          />
          <TaxContext.Provider value={{
            totalTax,
            setTotalTax,
          }}>
            {isShowTaxAmount ? <>
              <ViewTaxAmount />
              <TaxRebateCalculatorForm
              /> 
            </> : null}
          </TaxContext.Provider>
        </FormContext.Provider>
      </div>
    </>
  )
}

export default Index