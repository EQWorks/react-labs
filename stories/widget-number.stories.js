import React from 'react'

import { storiesOf } from '@storybook/react'

import { WidgetNumber } from '../src'


storiesOf('WidgetNumber', module)
  .add('Default', () => (
    <WidgetNumber />
  ))
