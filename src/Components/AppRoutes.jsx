import React from 'react'
import { Routes, Route } from 'react-router'
import Index from './Index'
import TaxRule from './TaxRule'

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/tax-rule' element={<TaxRule/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes