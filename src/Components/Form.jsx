import React from 'react'
import { Input, 
  InputLabel, 
  InputAdornment, 
  FormControl, Select, 
  MenuItem, 
  Button, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormLabel } 
  from '@mui/material'
import { useState } from 'react'

function Form(props) {

  const [category, setCategory] = useState('1')

  const handleSubmit = (formData) => {

    props.toggler.setToggle(true)

    const income = formData.get('income');
    const isAnnualIncome = formData.get('incomeType');
    const catagoryNo = formData.get('category')
    let numberOfDisabledChildren = '0'

    if (catagoryNo == '6') {
      numberOfDisabledChildren = formData.get('noOfChildren')
    }

    console.log(`${income} ${isAnnualIncome} ${catagoryNo} ${numberOfDisabledChildren}`)

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
            defaultValue={'1'}
            value={category}
            onChange={e => {
              setCategory(e.target.value)
            }}
          >
            <MenuItem value={'1'}>General taxpayers</MenuItem>
            <MenuItem value={'2'}>Women & Senior Citizens (65+)</MenuItem>
            <MenuItem value={'3'}>People with Disabilities</MenuItem>
            <MenuItem value={'4'}>Third-Gender Individuals</MenuItem>
            <MenuItem value={'5'}>War-wounded Freedom Fighters</MenuItem>
            <MenuItem value={'6'}>Parent of a Disabled Child</MenuItem>
          </Select>
        </FormControl>
        <div className='ps-3' >
          <FormControl>
            <FormLabel id="new_tax_payer_input">Are you a new tax payer ?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="new_tax_payer_input"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {category == '6' ? <FormControl sx={{ width: '150px', m: 2 }} variant='standard'>
            <InputLabel id="no_of_children">No. of Children</InputLabel>
            <Select
              required
              labelId="no_of_children"
              id="no_of_children"
              name='noOfChildren'
              label="no_of_children"
              defaultValue={'1'}
            >
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'5'}>5</MenuItem>
              <MenuItem value={'6'}>6</MenuItem>
            </Select>
          </FormControl> :
            null}
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