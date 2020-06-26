import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { TextField } from '../src'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


storiesOf('TextField', module)
  .add('Default', () => <TextField fullWidth />)
  .add('Adornments', () => <TextField startAdornment="$" endAdornment='Kg' />)
  .add('Adornment Buttons', () => {
    const [values, setValues] = useState({ show: true, password: '' })
    return (<TextField
      id='password'
      label='Password'
      placeholder='Enter your password'
      type={values.show ? 'text' : 'password'}
      value={values.password}
      onChange={(e) => setValues({ ...values, password: e.target.value })}
      endAdornment={values.show ? <Visibility /> : <VisibilityOff />}
      adornmentButton
      adornmentOnClick={() => setValues({ ...values, show: !values.show })}
    />)
  })