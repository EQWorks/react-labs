import React from 'react'

import { storiesOf } from '@storybook/react'

import { Table } from '../src'

import provinces from './data/provinces'

storiesOf('Table', module)
  .add('Default', () => (
    <Table />
  ))
  .add('With { data }', () => (
    <Table data={provinces} />
  ))
  .add('With { data, columns }', () => (
    <Table
      data={provinces}
      columns={[
        { Header: 'New Cases', accessor: 'new_cases' },
        { Header: 'Total Cases', accessor: 'total_cases' },
        { Header: 'Province', accessor: 'province' },
        { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
      ]}
    />
  ))
  .add('With { data, children }', () => (
    <Table data={provinces}>
      <Table.Column Header='New Cases' accessor='new_cases' />
      <Table.Column Header='Total Cases' accessor='total_cases' />
      <Table.Column Header='Province' accessor='province' />
      <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
    </Table>
  ))
