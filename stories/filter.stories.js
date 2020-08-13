import React, { useState, useRef } from 'react'
import { Filter, DynamicButton } from '../src'

import Grid from '@material-ui/core/Grid'
import FilterListIcon from '@material-ui/icons/FilterList'


export default {
  component: Filter,
  title: 'Filter',
}

export const Default = () => {
  const [open, setOpen] = useState(false)
  const options = [
    { hello: false },
    { there: false },
  ]
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
        anchorEl={ref.current}
      />
    </Grid>
  )
}

export const Label = () => {
  const options = [
    { hello: false },
    { there: false },
  ]
  const [open, setOpen] = useState(false)
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
        anchorEl={ref.current}
        formLabel='Categories'
      />
    </Grid>
  )
}

export const SelectAll = () => {
  const options = [
    { hello: false },
    { there: false },
    { hi: false },
    { bye: false },
  ]
  const [open, setOpen] = useState(false)
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
        anchorEl={ref.current}
        formLabel='Categories'
        hasSelectAll
      />
    </Grid>
  )
}
