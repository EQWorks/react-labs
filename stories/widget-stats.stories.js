import React from 'react'

import { WidgetStats } from '../src/index'

export default {
  title: 'Data Display/Widget Stats',
  component: WidgetStats,
  args: {
    title: 'Title',
    units: '',
    trendInfo: {
      isTrendPercentage: false,
      upIsGreen: true,
      up: 'more',
      down: 'less',
      comparedTo: 'than yesterday',
    },
    value: (Math.random() * (100 - 1) + 1).toFixed(0),
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
}

const Template = (args) => <WidgetStats {...args} />

export const Default = Template.bind({})
