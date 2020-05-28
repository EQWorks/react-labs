import React from 'react'

import { storiesOf } from '@storybook/react'

import { WidgetStats } from '../src'


storiesOf('WidgetStats', module)
  .add('Default', () => (
    <WidgetStats />
  ))
  .add('Number', () => (
    <WidgetStats
      title='Example Number'
      value={(Math.random() * (100 - 1) + 1).toFixed(0)}
    />
  ))
  .add('Trend', () => (
    <WidgetStats
      title='Example Trend'
      value={(Math.random() * (100 - 1) + 1).toFixed(0)}
      prev={(Math.random() * (100 - 1) + 1).toFixed(0)}
      comparedTo='from yesterday'
    />
  ))
  .add('isPercentage', () => (
    <WidgetStats
      title='Example Trend Percentage'
      value={Math.random().toFixed(2)}
      prev={Math.random().toFixed(2)}
      isPercentage={true}
      comparedTo='from the day before'
    />
  ))
  .add('Children', () => (
    <WidgetStats
      title='This Month'
      value={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}
    >
      🌕🌖🌗🌘🌑🌒🌓🌔🌕
    </WidgetStats>
  ))
