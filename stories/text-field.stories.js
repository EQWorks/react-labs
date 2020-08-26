import React, { useState } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { TextField } from '../src/index'

export default {
  title: 'Inputs/Text Field',
  component: TextField,
  args: {
    autoFocus: false,
    endAdornment: '',
    error: false,
    label: 'Text field label',
    multiline: false,
    startAdornment: '',
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
    },
    endAdornment: {
      type: 'string',
    },
    error: {
      type: 'boolean',
    },
    inputProps: {
      control: null,
    },
    label: {
      type: { name: 'string', required: true },
    },
    multiline: {
      type: 'boolean',
    },
    placeholder: {
      type: 'string',
    },
    rows: {
      type: 'number',
    },
    startAdornment: {
      type: 'string',
    },
  },
}

const Template = (args) => <TextField {...args} />
const TemplateButton = () => {
  const [values, setValues] = useState({
    show: false,
    password: 'hello there',
  })
  return (
    <TextField
      adornmentButton
      adornmentOnClick={() => setValues({ ...values, show: !values.show })}
      id='password'
      endAdornment={values.show ? <Visibility /> : <VisibilityOff />}
      label='Password'
      onChange={(e) => setValues({ ...values, password: e.target.value })}
      placeholder='Enter your password'
      type={values.show ? 'text' : 'password'}
      value={values.password}
    />
  )
}

export const Default = Template.bind({})

// ===

export const AdornmentButton = TemplateButton.bind({})

AdornmentButton.argTypes = {
  autoFocus: {
    control: null,
  },
}

AdornmentButton.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

export const AdornmentIcon = Template.bind({})

AdornmentIcon.args = {
  defaultValue: 'john.doe@mail.com',
  endAdornment: <CheckIcon style={{ color: '#00d308' }} />,
  helperText: 'Enter your email address',
  label: 'Email',
  type: 'email',
}

AdornmentIcon.argTypes = {
  adornmentButton: {
    control: null,
  },
  endAdornment: {
    control: null,
  },
}
