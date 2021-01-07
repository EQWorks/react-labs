import React from 'react'

import BuildIcon from '@material-ui/icons/Build'
import BookmarksIcon from '@material-ui/icons/Bookmarks'

import { TabPanels } from '../src/index'

const labelArr = ['Tab-1', 'Tab-2', 'Tab-3']
const tabsArr = ['Tab-1: children', 'Tab-2: children', '3: something here']

const labelVerArr = [
  <BuildIcon key='Views' onClick={() => console.log('Clicked Views.')} />,
  <BookmarksIcon key='Saved' onClick={() => console.log('Clicked Saved.')} />,
]

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

const customVerTabs = () => ({
  root: {
    borderRight: '2px solid #e8e8e8',
    maxWidth: 100,
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})

export default {
  title: 'Navigation/Tab Panel',
  component: TabPanels,
  args: {
    tabChildren: tabsArr,
    tabLabels: labelArr,
  },
  argTypes: {
    customTab: {
      control: null,
    },
    customTabs: {
      control: null,
    },
    tabChildren: {
      control: null,
    },
    tabLabels: {
      control: null,
    },
  },
}

const Template = (args) => <TabPanels {...args} />

export const Default = Template.bind({})

// ===

export const Alternate = Template.bind({})

export const Vertical = Template.bind({})

Alternate.args = {
  customTab: customTab,
  customTabs: customTabs,
}

Vertical.args = {
  customTab,
  customTabs: customVerTabs,
  TabsProps: { orientation: 'vertical' },
  tabLabels: labelVerArr,
}
