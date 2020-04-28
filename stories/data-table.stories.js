import React from 'react'

import { storiesOf } from '@storybook/react'

import { DataTable } from '../src'


storiesOf('DataTable', module)
  .add('Default', () => (
    <DataTable />
  ))
