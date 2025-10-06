import React, { useEffect, useState } from 'react'

import Form from './Form';
import ViewTaxAmout from './ViewTaxAmout';

function Index() {

  const exmeptionLimit = {
    '1': 375000,
    '2': 425000,
    '3': 500000,
    '4': 500000,
    '5': 525000
  }

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="container">
        <h1>Income Tax Calculator</h1>
        <Form toggler = {{toggle, setToggle}}/>
        {toggle ? <ViewTaxAmout/> : ""}
      </div>
    </>
  )
}

export default Index