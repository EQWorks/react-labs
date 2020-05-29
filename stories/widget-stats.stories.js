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
      trendInfo={{
        isTrendPercentage: false,
        upIsGreen: true,
        up: 'more',
        down: 'less',
        comparedTo: 'than yesterday'
      }}
    />
  ))
  .add('isPercentage', () => (
    <WidgetStats
      title='Example Trend Percentage'
      value={Math.random().toFixed(2)}
      prev={Math.random().toFixed(2)}
      trendInfo={{
        isTrendPercentage: true,
        upIsGreen: true,
        up: 'increase',
        down: 'decrease',
        comparedTo: 'from the day before'
      }}
    />
  ))
  .add('isPercentage (increase is red)', () => (
    <WidgetStats
      title='Example Trend'
      value={(Math.random() * (100 - 1) + 1).toFixed(0)}
      prev={(Math.random() * (100 - 1) + 1).toFixed(0)}
      trendInfo={{
        isTrendPercentage: true,
        upIsGreen: false,
        up: 'increase',
        down: 'decrease',
        comparedTo: 'from yesterday'
      }}
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
