import React, { useEffect, useState } from 'react'
import { FormContext } from '../Context/AppContext';
import Form from './Form';
import ViewTaxAmount from './ViewTaxAmount';

function Index() {

  const [isShowTaxAmount, setIsShowTaxAmount] = useState(false);
  const [form, setFormData] = useState({
    income: 0,
    incomeType: "1",
    categoryNo: "1",
    isNewTaxPayer: null,
    numberOfDisabledChildren: null
  })

  useEffect(() => {
    console.log(form)
  }, [form])

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
          {isShowTaxAmount ? <ViewTaxAmount /> : ""}
        </FormContext.Provider>

      </div>
    </>
  )
}

export default Index