import React from 'react'
import { storiesOf } from '@storybook/react'

import { Transition } from '../src'


storiesOf('Transition', module)
  .add('Default', () => (
    <Transition action='load' open={true} message='Loading' />
  ))
  