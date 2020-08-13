import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import DynamicButton from './dynamic-button'
import StyledCheckbox from './styled-checkbox'


const useStyles = makeStyles(() => ({
  popper: { zIndex: 1 },
  paper: { paddingBottom: '10px' },
  formControl: { margin: '15px 15px 5px 15px' },
  checkboxRoot: { padding: '5px 5px 5px 10px' },
  select: { paddingLeft: '15px' },
}))

const Filter = ({
  icon,
  label,
  options,
  optionsLabel,
  hasSelectAll,
  onChange,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [filterVals, setFilterVals] = useState(options)
  const [selectAll, setSelectAll] = useState(true)
  const ref = useRef(null)

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
    <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
      <div ref={ref}>
        <DynamicButton type='tertiary' startIcon={icon} onClick={() => setOpen(!open)}>
          {label}
        </DynamicButton>
      </div>
      <Popper open={open} anchorEl={ref.current} transition disablePortal className={classes.popper}>
        <Paper className={hasSelectAll ? null : classes.paper}>
          <Grid container justify='flex-start' alignItems='flex-start' direction='column'>
            <FormControl component='fieldset' className={classes.formControl}>
              <Typography variant='subtitle1' gutterBottom>{optionsLabel}</Typography>
              <FormGroup>
                {filterVals.map((val) => {
                  const [optionName, optionState] = Object.entries(val)[0]
                  return (
                    <div key={optionName}>
                      <FormControlLabel
                        control={(
                          <StyledCheckbox
                            className={classes.checkboxRoot}
                            checked={optionState}
                            onChange={checkboxOnChange}
                            name={optionName}
                          />
                        )}
                        label={optionName}
                      />
                    </div>
                  )
                })}
              </FormGroup>
            </FormControl>
            {hasSelectAll && <div className={classes.select}>
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
      </Popper>
    </Grid>
  )
}

Filter.propTypes = {
  options: PropTypes.array.isRequired,
  optionsLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.any,
  hasSelectAll: PropTypes.bool,
  onChange: PropTypes.func,
}

Filter.defaultProps = {
  icon: '',
  anchorEl: '',
  hasSelectAll: false,
  onChange: () => {},
}

export default Filter
