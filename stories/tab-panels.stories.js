import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabPanels } from '../src'


const labelArr = ['Tab-1', 'Tab-2', 'Tab-3']
const tabsArr = ['Tab-1: children', 'Tab-2: children', '3: something here']

storiesOf('TabPanel', module)
  .add('Default', () => <TabPanels tabLabels={labelArr} tabChildren={tabsArr} />)