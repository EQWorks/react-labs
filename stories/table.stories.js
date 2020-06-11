import React from 'react'

import { storiesOf } from '@storybook/react'

import Paper from '@material-ui/core/Paper'
import { Table } from '../src'

import provinces from './data/provinces'

storiesOf('Table', module)
  .add('Default', () => (
    <Table />
  ))
  .add('With { data }', () => (
    <Table data={provinces} />
  ))
  .add('With { data, columns, tableProps }', () => (
    <Table
      data={provinces}
      columns={[
        { Header: 'New cases', accessor: 'new_cases' },
        { Header: 'Total cases', accessor: 'total_cases' },
        { Header: 'Province', accessor: 'province' },
        { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
      ]}
      tableProps={{ // any Material UI <Table> props
        stickyHeader: true,
        size: 'small',
      }}
    />
  ))
  .add('With { data, children }', () => (
    <Table data={provinces}>
      <Table.Column Header='New cases' accessor='new_cases' />
      <Table.Column Header='Total cases' accessor='total_cases' />
      <Table.Column Header='Province' accessor='province' />
      <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
    </Table>
  ))
  .add('Wrapped by MUI <Paper />', () => (
    <Paper>
      <Table data={provinces} />
    </Paper>
  ))
  .add('With { downloadable = false }', () => (
    <Table data={provinces} downloadable={false} />
  ))
  .add('With some Table.Column { noToggle = true }', () => (
    <Table data={provinces}>
      <Table.Column Header='New cases' accessor='new_cases' noToggle={true} />
      <Table.Column Header='Total cases' accessor='total_cases' />
      <Table.Column Header='Province' accessor='province' noToggle={true} />
      <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
    </Table>
  ))
