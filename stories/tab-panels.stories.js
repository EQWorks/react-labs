import React from 'react'
import { storiesOf } from '@storybook/react'

import { TabPanels } from '../src/index'

const labelArr = ['Tab-1', 'Tab-2', 'Tab-3']
const tabsArr = ['Tab-1: children', 'Tab-2: children', '3: something here']

const customTabs = {
  root: {
    borderBottom: '2px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
}
const customTab = () => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
  },
})

storiesOf('TabPanel', module)
  .add('Default', () => (
    <TabPanels tabLabels={labelArr} tabChildren={tabsArr} />
  ))
  .add('CustomStyling Example', () => (
    <TabPanels
      customTabs={customTabs}
      customTab={customTab}
      tabLabels={labelArr}
      tabChildren={tabsArr}
    />
  ))
