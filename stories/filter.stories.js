import React, { useState, useRef } from 'react'
import { Filter, DynamicButton } from '../src'

import Grid from '@material-ui/core/Grid'
import FilterListIcon from '@material-ui/icons/FilterList'


export default {
  component: Filter,
  title: 'Filter',
}

export const Default = () => {
  const options = ['hello', 'there']
  const [open, setOpen] = useState(false)
  const [filterVals, setFilterVals] = useState({
    hello: false,
    there: false
  })
  const ref = useRef(null)

  return (
    <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
      <div ref={ref}>
        <DynamicButton
          type='tertiary'
          startIcon={<FilterListIcon />}
          onClick={() => setOpen(!open)}
        >
          Filter
        </DynamicButton>
      </div>
      <Filter
        options={options}
        open={open}
        filterVals={filterVals}
        anchorEl={ref.current}
        checkboxOnChange={(e) => setFilterVals({ ...filterVals, [e.target.name]: e.target.checked })}
      />
    </Grid>
  )
}

export const Label = () => {
  const options = ['hello', 'there']
  const [open, setOpen] = useState(false)
  const [filterVals, setFilterVals] = useState({
    hello: false,
    there: false
  })
  const ref = useRef(null)

  return (
    <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
      <div ref={ref}>
        <DynamicButton
          type='tertiary'
          startIcon={<FilterListIcon />}
          onClick={() => setOpen(!open)}
        >
          Filter
        </DynamicButton>
      </div>
      <Filter
        options={options}
        open={open}
        filterVals={filterVals}
        anchorEl={ref.current}
        checkboxOnChange={(e) => setFilterVals({ ...filterVals, [e.target.name]: e.target.checked })}
        formLabel='Categories'
      />
    </Grid>
  )
}

export const SelectAll = () => {
  const options = ['hello', 'there']
  const [open, setOpen] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [filterVals, setFilterVals] = useState({
    hello: false,
    there: false
  })
  const ref = useRef(null)

  const handleSelectAll = () => {
    const selectedVals = options.reduce((obj, opt) => ({ ...obj, [opt]: !selectAll }), {})
    setSelectAll(!selectAll)
    setFilterVals(selectedVals)
  }

  return (
    <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
      <div ref={ref}>
        <DynamicButton
          type='tertiary'
          startIcon={<FilterListIcon />}
          onClick={() => setOpen(!open)}
        >
          Filter
        </DynamicButton>
      </div>
      <Filter
        options={options}
        open={open}
        selectedAll={selectAll}
        filterVals={filterVals}
        anchorEl={ref.current}
        checkboxOnChange={(e) => setFilterVals({ ...filterVals, [e.target.name]: e.target.checked })}
        selectAllOnClick={handleSelectAll}
        formLabel='Categories'
      />
    </Grid>
  )
}
