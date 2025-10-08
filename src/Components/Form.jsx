import React, { useContext, useEffect } from 'react'
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl, Select,
  MenuItem,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel
}
  from '@mui/material'
import { useState } from 'react'
import { FormContext } from '../Context/AppContext'
import { categories } from '../Utils/AppUtils'



function Form(props) {

  const [category, setCategory] = useState('generalTaxPayers')

  const { form, setFormData } = useContext(FormContext)
  const menuItemsList = []

  for (let i in categories) {
    menuItemsList.push(<MenuItem value={i}>{categories[i]}</MenuItem>)
  }
  const handleSubmit = (formData) => {

    props.toggler.setToggle(true)

    const income = parseFloat(formData.get('income'));
    const incomeType = formData.get('incomeType');
    const category = formData.get('category')
    const isNewTaxPayer = formData.get('isNewTaxPayer') === "1"

    let numberOfDisabledChildren = 0

    if (category == 'parentOfADisabledChild') {
      numberOfDisabledChildren = Number(formData.get('numberOfChildren'))
    }

    setFormData(() => {
      return ({
        income,
        incomeType,
        category,
        isNewTaxPayer,
        numberOfDisabledChildren
      })
    })
  }

  return (
    <>
      <form action={handleSubmit}>

        <FormControl sx={{ width: '250px', m: 2 }} variant="standard">
          <InputLabel htmlFor="income">
            Income
          </InputLabel>
          <Input
            id="income"
            type='number'
            name='income'
            required
            endAdornment={
              <InputAdornment position="end">
                ৳
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ width: '150px', m: 2 }} variant='standard'>
          <InputLabel id="income_type">Income Type</InputLabel>
          <Select
            required
            labelId="income_type"
            id="income_type"
            name='incomeType'
            label="Income Type"
            defaultValue={'0'}
          >
            <MenuItem value={'0'}>Monthly</MenuItem>
            <MenuItem value={'1'}>Annual</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: '150px', m: 2 }} variant='standard'>
          <InputLabel id="category">Category</InputLabel>
          <Select
            required
            labelId="category"
            id="category"
            name='category'
            label="Category"
            defaultValue={'generalTaxPayers'}
            value={category}
            onChange={e => {
              setCategory(e.target.value)
            }}
          >
            {menuItemsList}
          </Select>
        </FormControl>

        <div className='ps-3' >
          <FormControl>
            <FormLabel id="new_tax_payer_input">Are you a new tax payer ?</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="new_tax_payer_input"
              defaultValue="female"
              name="isNewTaxPayer"
            >
              <FormControlLabel value="0" control={<Radio />} label="Yes" />
              <FormControlLabel value="1" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {category == 'parentOfADisabledChild' ?
            <>
              <FormControl sx={{ width: '150px', m: 2 }} variant="standard">
                <InputLabel htmlFor="no_of_children">
                  Number of Children
                </InputLabel>
                <Input
                  id="no_of_children"
                  type='number'
                  name='numberOfChildren'
                  required
                />
              </FormControl>
            </> : null}

          <Button className='float-end'
            sx={{ m: 2 }}
            type='submit'
            variant='contained'
            color='primary'>
            Submit
          </Button>
        </div>

      </form>
    </>
  )
}

export default Form