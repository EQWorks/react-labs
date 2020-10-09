import React, { useState } from 'react'
// import { FormControlLabel } from '@material-ui/core'

import { Switch } from '../src/index'

export default {
  title: 'Lab/Switch',
  component: Switch,
  args: {},
  argTypes: {},
}

const Template = () => {
  const [state, setState] = useState({ checkedA: true })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Switch
      checked={state.checkedA}
      inputProps={{ 'aria-label': 'checkbox' }}
      name="checkedA"
      onChange={handleChange}
    />
  )
}

export const Default = Template.bind({})
