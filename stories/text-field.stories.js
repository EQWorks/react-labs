import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextField } from '../src'


storiesOf('TextField', module)
  .add('Default', () => <TextField fullWidth />)
  .add('w/ Adornments', () => <TextField fullWidth startAdornment="$" endAdornment='Kg' />)