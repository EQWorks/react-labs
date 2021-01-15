import React, { createRef } from 'react'

import BuildIcon from '@material-ui/icons/Build'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import Drawer from '@material-ui/core/Drawer'

import { TabPanels, TabPanelsWithRef } from '../src/index'
// import { withRef } from '../src/index'

const labelArr = ['Tab-1', 'Tab-2', 'Tab-3']
const tabsArr = ['Tab-1: children', 'Tab-2: children', '3: something here']

const tabsRefs = tabsArr.map(() => createRef(null)) // same number of refs as tabs
const tabsWithRefArr = tabsArr.map((child, i) => {
  return (
    <div key={i}>
      <Drawer
        open
        anchor='top'
        variant='persistent'
        elevation={0}
        PaperProps={{
          style: {
            position: 'absolute',
            height: 100,
            border: '2px solid black',
          },
        }}
        ModalProps={{
          container: tabsRefs[i],
          style: { position: 'absolute' },
        }}
      >
        <div style={{
          height: (i + 10) * 10,
          backgroundColor: `rgb(${i}50, ${i}50, ${i}50)`,
        }}>
          drawer content from {child}
        </div>
      </Drawer>
      <p style={{ paddingTop: 150, height: '100px', textAlign: 'center', margin: 0 }}>
        {child} context
      </p>
    </div>
  )
})

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
const TemplateRef = (args) => <TabPanelsWithRef {...args} /> // const TabPanelsWithRef = withRef(TabPanels)

export const Default = Template.bind({})

// ===

export const Alternate = Template.bind({})

export const Vertical = Template.bind({})

export const WithRef = TemplateRef.bind({})

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

WithRef.args = {
  customTab,
  customTabs: customTabs,
  forwardRef: tabsRefs || [],
  tabChildren: tabsWithRefArr,
}
