import React, { useEffect, useState } from 'react'
import { FormContext } from '../Context/AppContext';
import Form from './Form';
import ViewTaxAmout from './ViewTaxAmout';

function Index() {

  const [toggle, setToggle] = useState(false);

  const formDetails = {
    income: "0",
    incomeType: "1",
    categoryNo: "1",
    isNewTaxPayer: "1",
    numberOfDisabledChildren: "0"
  }

  const [form, setFormData] = useState({ ...formDetails })

  useEffect(()=>{
    console.log(form)
  },[form])

  return (
    <>
      <div className="container">
        <h1>Income Tax Calculator</h1>
        <FormContext.Provider value={{form,setFormData}}>
          <Form toggler={{ toggle, setToggle }} />
          {toggle ? <ViewTaxAmout /> : ""}
        </FormContext.Provider>
      </div>
    </>
  )
}

export default Index