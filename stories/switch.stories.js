import React, { useState } from 'react'

import { FormControlLabel, Switch } from '../src/index'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {},
  argTypes: {
    checked: {
      description: 'If true, the component is checked.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      type: { name: 'boolean', required: false },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      type: { name: 'boolean', required: false },
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

ControlLabel.args = {
  label: 'Item',
}

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
