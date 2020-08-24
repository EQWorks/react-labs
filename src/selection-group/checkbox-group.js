import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'

import StyledCheckbox from '../styled-checkbox'


const CheckboxGroup = ({ filterVals, checkboxOnChange, direction }) => (
  <FormGroup>
    <Grid container direction={direction}>
      {filterVals.map((val) => {
        const [optionName, optionState] = Object.entries(val)[0]
        return (
          <div key={optionName}>
            <FormControlLabel
              control={(
                <StyledCheckbox
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
    </Grid>
  </FormGroup>
)

CheckboxGroup.propTypes = {
  filterVals: PropTypes.array.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
}

export default CheckboxGroup
