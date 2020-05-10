import React from 'react'

import { storiesOf } from '@storybook/react'

import { DataTable } from '../src'

import province from '../src/data/provinceData'

storiesOf('DataTable', module)
  .add('Default', () => (
    <DataTable data={province} 
      isPercentage={true} whichColumn={3}/>
  ))
