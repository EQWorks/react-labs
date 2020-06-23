import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert } from '../src'


storiesOf('Alert', module)
  .add('Error', () => (
    <Alert severity='error' message='Error message.' />
  ))
  .add('Warning', () => (
    <Alert severity='warning' message='Warning message.' />
  ))
  .add('Success', () => (
    <Alert severity='success' message='Success message.' />
  ))
  .add('Success with header', () => (
    <Alert severity='success' header='Msg Header' message='Success message.' />
  ))