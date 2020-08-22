import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import DynamicButton from '../dynamic-button'
import CheckboxGroup from './checkbox-group'
import RadioGroup from './radio-group'


const useStyles = makeStyles(() => ({
  paper: { paddingBottom: '10px' },
  formControl: { margin: '15px 15px 5px 15px' },
  select: { paddingLeft: '15px' },
}))

const SelectionGroup = ({
  type,
  options,
  optionsLabel,
  hasSelectAll,
  onChange,
  direction,
}) => {
  const classes = useStyles()
  const [filterVals, setFilterVals] = useState(options)
  const [selectAll, setSelectAll] = useState(true)

  const checkboxOnChange = (e) => {
    const newFilterVals = filterVals.map((v) => {
      const [ filterName ] = Object.keys(v)
      if (filterName === e.target.name) {
        return { [e.target.name]: e.target.checked }
      }
      return v
    })
    const optionsState = newFilterVals.filter((v) => !Object.values(v)[0])
    if (optionsState.length === 0) setSelectAll(!selectAll)
    if (optionsState.length > 0 && !selectAll) setSelectAll(!selectAll)
    setFilterVals(newFilterVals)

    const selectedVals = newFilterVals.reduce((arr, val) => {
      const [ name, selected ] = Object.entries(val)[0]
      if (selected) arr.push(name)
      return arr
    }, [])
    onChange(newFilterVals, selectedVals)
  }

  const selectAllOnClick = () => {
    const newFilterVals = filterVals.reduce((arr, opt) => {
      const [ name ] = Object.keys(opt)
      arr.push({ [name]: selectAll })
      return arr
    }, [])
    setFilterVals(newFilterVals)
    setSelectAll(!selectAll)

    const selectedVals = newFilterVals.reduce((arr, val) => {
      const [ name, selected ] = Object.entries(val)[0]
      if (selected) arr.push(name)
      return arr
    }, [])
    onChange(newFilterVals, selectedVals)
  }

  return (
    <Paper className={hasSelectAll ? null : classes.paper}>
      <Grid container justify='flex-start' alignItems='flex-start' direction='column'>
        <FormControl component='fieldset' className={classes.formControl}>
          <Typography variant='subtitle1' gutterBottom>{optionsLabel}</Typography>
          {type === 'checkbox' && (
            <CheckboxGroup filterVals={filterVals} checkboxOnChange={checkboxOnChange} direction={direction} />
          )}
          {type === 'radio' && (<RadioGroup options={options} onChange={onChange} direction={direction} />)}
        </FormControl>
        {hasSelectAll && type === 'checkbox' && <div className={classes.select}>
          <DynamicButton
            type='tertiary'
            style={{ padding: '0px', margin: '0px 0px 15px 0px' }}
            onClick={selectAllOnClick}
          >
            {selectAll ? 'Select All' : 'Reset'}
          </DynamicButton>
        </div>}
      </Grid>
    </Paper>
  )
}

SelectionGroup.propTypes = {
  options: PropTypes.array.isRequired,
  optionsLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hasSelectAll: PropTypes.bool,
  onChange: PropTypes.func,
  direction: PropTypes.string,
}

SelectionGroup.defaultProps = {
  anchorEl: '',
  hasSelectAll: false,
  onChange: () => {},
  direction: 'column',
}

export default SelectionGroup
