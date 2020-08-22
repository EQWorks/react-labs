import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MUIRadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'

import StyledRadio from '../styled-radio'


const RadioGroup = ({ options, onChange, direction }) => {
  const [val, setVal] = useState(options[0])

  const radioOnChange = (e) => {
    setVal(e.target.value)
    onChange(e.target.value)
  }

  return (
    <MUIRadioGroup value={val} onChange={radioOnChange}>
      <Grid container direction={direction}>
        {options.map((o, i) => (
          <div key={i}>
            <FormControlLabel
              value={o}
              control={(<StyledRadio />)}
              label={o}
            />
          </div>
        ))}
      </Grid>
    </MUIRadioGroup>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
}

export default RadioGroup
