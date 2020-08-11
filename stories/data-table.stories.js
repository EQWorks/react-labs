import React from 'react'
import { storiesOf } from '@storybook/react'

import { DataTable } from '../src/index'
import province from './data/provinces'

storiesOf('DataTable', module)
  .add('Default', () => <DataTable />)
  .add('With Data', () => (
    <DataTable data={province} isPercentage={true} whichColumn={3} />
  ))
