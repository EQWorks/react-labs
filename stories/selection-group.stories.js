import React from 'react'
import { SelectionGroup } from '../src'


export default {
  component: SelectionGroup,
  title: 'SelectionGroup',
}

export const Radio = () => {
  const options = ['hello', 'there', 'hi', 'bye']
  const radioOnChange = (newVal) => console.log('newVal: ', newVal)
  
  return (
    <>
      <SelectionGroup
        type='radio'
        options={options}
        optionsLabel='Categories'
        onChange={radioOnChange}
      />
      <SelectionGroup
        type='radio'
        options={options}
        optionsLabel='Categories (with direction "row")'
        onChange={radioOnChange}
        direction='row'
      />
    </>
  )
}

export const Checkbox = () => {
  const options = [ { hello: false }, { there: false }, { hi: false }, { bye: false } ]
  const checkboxOnChange = (newFilterVals, selectedVals) => {
    console.log('newFilters: ', newFilterVals)
    console.log('selectedVals: ', selectedVals)
  }
  return (
    <>
      <SelectionGroup
        type='checkbox'
        options={options}
        optionsLabel='Categories'
        hasSelectAll
        onChange={checkboxOnChange}
      />
      <SelectionGroup
        type='checkbox'
        options={options}
        optionsLabel='Categories (with direction "row")'
        hasSelectAll
        onChange={checkboxOnChange}
        direction='row'
      />
    </>
  )
}
