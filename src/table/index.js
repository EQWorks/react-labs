import React, { useState, useEffect, useMemo, Children } from 'react'
import PropTypes from 'prop-types'

import { Table as MUITable, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { useTable } from 'react-table'

import TableColumn from './table-column'


const Table = ({ columns, data, children }) => {
  const [autoCols, setAutoCols] = useState(columns || [])
  const _data = useMemo(() => data, [data])
  useEffect(() => {
    if (!children && !columns) {
      setAutoCols(Object.keys(data[0] || {}).map((accessor) => ({
        accessor,
        Header: String(accessor).toLocaleUpperCase(),
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
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns: _cols, data: _data })

  return (
    <MUITable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, i) => (
          <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <TableCell key={i} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
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
}
Table.defaultProps = {
  columns: null,
  children: null,
  data: [],
}
Table.Column = TableColumn

export default Table