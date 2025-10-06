import React, { useEffect, useState } from 'react'
import { Input, InputLabel, InputAdornment, FormControl, Select, MenuItem, Button } from '@mui/material'

function Index() {

    const exmeptionLimit = {
        '1': 375000,
        '2': 425000,
        '3': 500000,
        '4': 500000,
        '5': 525000
    }

    const handleSubmit = (formData) => {
        const income = formData.get('income');
        const isAnnualIncome = formData.get('incomeType');
        const catagoryNo = formData.get('category')
        let numberOfDisabledChildren = '0'

        if (catagoryNo == '6') 
        {
            numberOfDisabledChildren = formData.get('noOfChildren')
        }

        console.log(`${income} ${isAnnualIncome} ${catagoryNo} ${numberOfDisabledChildren}`)

    }

    const [category, setCategory] = useState('1')

    
    return (
        <div className="container">
            <h1>Fill the form</h1>
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
                <div >
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
        </div>
    )
}

export default Index