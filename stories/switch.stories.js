import React, { useState } from 'react'
// import { FormControlLabel } from '@material-ui/core'

import { Switch } from '../src/index'

export default {
  title: 'Lab/Switch',
  component: Switch,
  args: {},
  argTypes: {
    checked: {
      control: null,
      type: { name: 'boolean', required: false },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => {
  const [state, setState] = useState({ checkedA: false })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Switch
      checked={state.checkedA}
      inputProps={{ 'aria-label': 'checkbox' }}
      name="checkedA"
      onChange={handleChange}
      {...args}
    />
  )
}

export const Default = Template.bind({})
