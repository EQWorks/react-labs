import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'


const SwitchGroup = ({ filterVals, switchOnChange, direction }) => (
  <FormGroup>
    <Grid container direction={direction}>
      {filterVals.map((val) => {
        const [optionName, optionState] = Object.entries(val)[0]
        return (
          <div key={optionName}>
            <FormControlLabel
              control={(
                <Switch
                  color='primary'
                  checked={optionState}
                  onChange={switchOnChange}
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

SwitchGroup.propTypes = {
  filterVals: PropTypes.array.isRequired,
  switchOnChange: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
}

export default SwitchGroup
