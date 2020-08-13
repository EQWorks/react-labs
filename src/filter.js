import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'

import DynamicButton from './dynamic-button'
import StyledCheckbox from './styled-checkbox'


const useStyles = makeStyles(() => ({
  popper: { zIndex: 1 },
  formControl: { margin: '15px 15px 5px 15px' },
  formLabel: { fontWeight: 'bolder', marginBottom: '10px' },
  checkboxRoot: { padding: '5px 5px 5px 10px' },
  select: { paddingLeft: '15px' },
}))

const Filter = ({
  options,
  hasSelectAll,
  formLabel,
  anchorEl,
  open,
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
  }

  const selectAllOnClick = () => {
    const newFilterVals = filterVals.reduce((arr, opt) => {
      const [ name ] = Object.keys(opt)
      arr.push({ [name]: selectAll })
      return arr
    }, [])
    setFilterVals(newFilterVals)
    setSelectAll(!selectAll)
  }

  return (
    <Popper open={open} anchorEl={anchorEl} transition disablePortal className={classes.popper}>
      <Paper>
        <Grid container justify='flex-start' alignItems='flex-start' direction='column'>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend' className={classes.formLabel}>{formLabel}</FormLabel>
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
  )
}

Filter.propTypes = {
  options: PropTypes.array.isRequired,
  formLabel: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  hasSelectAll: PropTypes.bool,
}

Filter.defaultProps = {
  anchorEl: '',
  hasSelectAll: false,
}

export default Filter
