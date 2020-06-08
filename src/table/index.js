import React, { useState, useEffect, useMemo, Children } from 'react'
import PropTypes from 'prop-types'

import {
  Table as MUITable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTable, useSortBy } from 'react-table'

import TableColumn from './table-column'


const useStyles = makeStyles(() => ({
  head: {
    fontSize: 'body',
    fontWeight: 600,
  },
}))

const getHeader = (s) => [
  s.charAt(0).toUpperCase(),
  s.slice(1).replace(/_/g, ' '),
].join('')

const Table = ({ columns, data, children, tableProps, headerGroupProps }) => {
  const classes = useStyles()
  const [autoCols, setAutoCols] = useState(columns || [])
  const _data = useMemo(() => data, [data])
  useEffect(() => {
    if (!children && !columns) {
      setAutoCols(Object.keys(data[0] || {}).map((accessor) => ({
        accessor,
        Header: getHeader(accessor),
      })))
    } else if (Array.isArray(columns) && columns.length > 0) {
      setAutoCols(columns)
    } else {
      setAutoCols(
        Children.toArray(children)
          .filter((c) => c.type === TableColumn || c.type.name === 'TableColumn')
          .map((c) => c.props)
      )
    }
  }, [columns, data, children])
  const _cols = useMemo(() => autoCols, [autoCols])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: _cols, data: _data }, useSortBy)

  return (
    <MUITable {...getTableProps(tableProps)}>
      <TableHead>
        {headerGroups.map((headerGroup, i) => (
          <TableRow key={i} {...headerGroup.getHeaderGroupProps(headerGroupProps)}>
            {headerGroup.headers.map((column, i) => (
              <TableCell
                key={i}
                className={classes.head}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <TableSortLabel
                  active={column.isSorted}
                  direction={column.isSortedDesc ? 'desc' : 'asc'}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow key={i} {...row.getRowProps()}>
              {row.cells.map((cell, i) => (
                <TableCell key={i} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          )
        })}
      </TableBody>
    </MUITable>
  )
}

const childrenColumnCheck = (props, _, componentName) => {
  if (props.children && props.columns) {
    return new Error(`Only one or none of 'children' or 'columns' is allowed in '${componentName}'`)
  }
}

Table.propTypes = {
  columns: childrenColumnCheck,
  children: childrenColumnCheck,
  data: PropTypes.array,
  tableProps: PropTypes.object,
  headerGroupProps: PropTypes.object,
}
Table.defaultProps = {
  columns: null,
  children: null,
  data: [],
  tableProps: {},
  headerGroupProps: {},
}
Table.Column = TableColumn

export default Table
