import React from 'react'

import { storiesOf } from '@storybook/react'

import { Table } from '../src'

import province from './data/provinces'

storiesOf('Table', module)
  .add('Default', () => (
    <Table />
  ))
  .add('With Data', () => (
    <Table data={province} />
  ))
