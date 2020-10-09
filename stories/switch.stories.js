import React, { useState } from 'react'

import { FormControlLabel, Switch } from '../src/index'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    label: 'Item',
  },
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

const TemplateControlLabel = (args) => {
  const [state, setState] = React.useState({
    checkedA: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <FormControlLabel
      control={<Switch checked={state.checkedA} onChange={handleChange} name='checkedA' {...args} />}
      label={args.label}
    />
  )
}

export const Default = Template.bind({})

// ===

export const ControlLabel = TemplateControlLabel.bind({})

ControlLabel.argTypes = {
  label: {
    description: 'The text to be used in an enclosing label element.',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Hello' },
    },
    type: { name: 'string', required: false },
  },
}
