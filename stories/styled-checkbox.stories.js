import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { StyledCheckbox } from '../src/index'

export default {
  title: 'Inputs/StyledCheckbox',
  component: StyledCheckbox,
  args: {
    checked: true,
    disabled: false,
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked)
  const checkOnChange = (e) => {
    setChecked(e.target.checked)
  }
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          checked={checked}
          disabled={args.disabled}
          onChange={checkOnChange}
        />
      }
      label='checkbox default'
    />
  )
}

export const Default = Template.bind({})
