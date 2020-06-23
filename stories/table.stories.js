import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Table } from '../src'
import { SelectFilter, NativeSelectFilter } from '../src/table/filters/select-filter'

import provinces from './data/provinces'


const TableContainer = ({ children }) => {
  const [parent, setParent] = useState('bare')

  const renderTable = () => {
    if (parent === 'paper') {
      return (
        <Paper>
          {children}
        </Paper>
      )
    }

    if (parent === 'card') {
      return (
        <Card>
          {children}
        </Card>
      )
    }

    return children
  }

  return (
    <>
      <ToggleButtonGroup
        value={parent}
        exclusive
        onChange={(_, parent) => { setParent(parent) }}
        aria-label='parent container'
        style={{ marginBottom: '0.5rem' }}
      >
        <ToggleButton value='bare' aria-label='bare container'>
          Bare
        </ToggleButton>
        <ToggleButton value='paper' aria-label='paper container'>
          Paper
        </ToggleButton>
        <ToggleButton value='card' aria-label='card container'>
          Card
        </ToggleButton>
      </ToggleButtonGroup>
      {renderTable()}
    </>
  )
}
TableContainer.propTypes = { children: PropTypes.object }
TableContainer.defaultProps = { children: null }


export default {
  component: Table,
  title: 'Table',
  decorators: [storyFn => <TableContainer>{storyFn()}</TableContainer>]
}

export const empty = () => (<Table />)

export const normal = () => (<Table data={provinces} />)

export const columns = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases' },
      { Header: 'Total cases', accessor: 'total_cases' },
      { Header: 'Province', accessor: 'province' },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
    ]}
  />
)

export const columnsChildren = () => (
  <Table data={provinces}>
    <Table.Column Header='New cases' accessor='new_cases' />
    <Table.Column Header='Total cases' accessor='total_cases' />
    <Table.Column Header='Province' accessor='province' />
    <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
  </Table>
)

export const noToggle = () => (
  <Table data={provinces}>
    <Table.Column Header='New cases' accessor='new_cases' noToggle={true} />
    <Table.Column Header='Total cases' accessor='total_cases' />
    <Table.Column Header='Province' accessor='province' noToggle={true} />
    <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
  </Table>
)

export const initialHidden = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases', hidden: true },
      { Header: 'Total cases', accessor: 'total_cases' },
      { Header: 'Province', accessor: 'province', hidden: true, noToggle: true },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
    ]}
  />
)

export const initialHiddenColumns = () => (
  <Table data={provinces} hiddenColumns={['new_cases', 'total_cases']}>
    <Table.Column Header='New cases' accessor='new_cases' />
    <Table.Column Header='Total cases' accessor='total_cases' />
    <Table.Column Header='Province' accessor='province' />
    <Table.Column Header='Rate' accessor='rate' Cell={({ value }) => `${value}%`} />
  </Table>
)

export const disableGlobalFilter = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases' },
      { Header: 'Total cases', accessor: 'total_cases' },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
      { Header: 'Province', accessor: 'province' },
    ].map((c) => ({ ...c, disableGlobalFilter: true }))}
  />
)

export const disableFilters = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases' },
      { Header: 'Total cases', accessor: 'total_cases', disableFilters: true },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
      { Header: 'Province', accessor: 'province', disableFilters: true, disableGlobalFilter: true },
    ]}
  />
)

export const SelectionFilter = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases' },
      { Header: 'Total cases', accessor: 'total_cases' },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%` },
      { Header: 'Province', accessor: 'province', Filter: Table.filters.SelectionFilter, filter: Table.filters.SelectionFilter.filterFn },
    ]}
  />
)

export const SelectFilters = () => (
  <Table
    data={provinces}
    columns={[
      { Header: 'New cases', accessor: 'new_cases' },
      { Header: 'Total cases', accessor: 'total_cases' },
      { Header: 'Rate', accessor: 'rate', Cell: ({ value }) => `${value}%`, Filter: SelectFilter, filter: SelectFilter.filterFn },
      { Header: 'Province', accessor: 'province', Filter: NativeSelectFilter, filter: NativeSelectFilter.filterFn },
    ]}
  />
)

export const initialSortBy = () => (
  <Table
    data={provinces}
    sortBy={{ id: 'new_cases', desc: true }}
  />
)

export const tableProps = () => (
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
)
