import React from 'react'
import { Filter } from '../src'

import FilterListIcon from '@material-ui/icons/FilterList'


export default {
  component: Filter,
  title: 'Filter',
}

export const Default = () => {
  const options = [ { hello: false }, { there: false } ]
  return (
    <Filter
      label='Filter'
      options={options}
      optionsLabel='Categories'
    />
  )
}

export const Icon = () => {
  const options = [ { hello: false }, { there: false } ]
  return (
    <Filter
      icon={<FilterListIcon />}
      label='Filter'
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
    <Filter
      icon={<FilterListIcon />}
      label='Filter'
      options={options}
      optionsLabel='Categories'
      hasSelectAll
      onChange={checkboxOnChange}
    />
  )
}
