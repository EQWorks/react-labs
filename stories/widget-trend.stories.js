import React from 'react'

import { storiesOf } from '@storybook/react'

import { WidgetTrend } from '../src'


storiesOf('WidgetTrend', module)
  .add('Default', () => (
    <WidgetTrend />
  ))
