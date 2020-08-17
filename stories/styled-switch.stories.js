import React from 'react'
import { FormControlLabel, FormGroup } from '@material-ui/core'

import { StyledSwitch } from '../src/index'

export default {
  component: StyledSwitch,
  title: 'StyledSwitch',
}

export const Default = () => {
  return (
    <FormGroup>
      <FormControlLabel
        value="firstItem"
        control={<StyledSwitch />}
        label="Default"
      />
      <FormControlLabel
        value="firstItem"
        control={<StyledSwitch checked={true} disabled />}
        label="Checked + Disabled"
      />

      <FormControlLabel
        value="firstItem"
        control={<StyledSwitch checked={false} disabled />}
        label="Unchecked + Disabled"
      />
    </FormGroup>
  )
}
