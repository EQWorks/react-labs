import React from 'react'
import { SelectionGroup } from '../src'


export default {
  component: SelectionGroup,
  title: 'Filter',
}

export const Default = () => {
  const options = [ { hello: false }, { there: false } ]
  return (
    <SelectionGroup
      options={options}
      optionsLabel='Categories'
    />
  )
}

export const Icon = () => {
  const options = [ { hello: false }, { there: false } ]
  return (
    <SelectionGroup
      options={options}
      optionsLabel='Categories'
    />
  )
}

export const SelectAll = () => {
  const options = [ { hello: false }, { there: false }, { hi: false }, { bye: false } ]
  const checkboxOnChange = (newFilterVals, selectedVals) => {
    console.log('newFilters: ', newFilterVals)
    console.log('selectedVals: ', selectedVals)
  }
  return (
    <SelectionGroup
      options={options}
      optionsLabel='Categories'
      hasSelectAll
      onChange={checkboxOnChange}
    />
  )
}
