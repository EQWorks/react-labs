import React from 'react'

import { WidgetStats } from '../src/index'

export default {
  title: 'Data Display/Widget Stats',
  component: WidgetStats,
  args: {
    prev: null,
    title: 'Title',
    trendInfo: {
      isTrendPercentage: false,
      upIsGreen: true,
      up: 'more',
      down: 'less',
      comparedTo: 'than yesterday',
    },
    units: '',
    value: parseInt((Math.random() * (100 - 1) + 1).toFixed(0)),
  },
}

const Template = (args) => <WidgetStats {...args} />

export const Default = Template.bind({})

// ===

export const Number = Template.bind({})

Number.args = {
  title: 'Number',
  value: parseInt((Math.random() * (100 - 1) + 1).toFixed(0)),
}

Number.argTypes = {
  prev: {
    control: null,
  },
  trendInfo: {
    control: null,
  },
}

// ===

export const Trend = Template.bind({})

Trend.args = {
  prev: parseInt((Math.random() * (100 - 1) + 1).toFixed(0)),
  title: 'Trend',
  units: 'cases',
  value: parseInt((Math.random() * (100 - 1) + 1).toFixed(0)),
}
