import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Table as MUITable, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { useTable } from 'react-table'



const Table = ({ columns, data }) => {
  const [autoCols, setAutoCols] = useState(columns)
  const _data = useMemo(() => data, [data])
  useEffect(() => {
    if (columns && columns.length) {
      setAutoCols(columns)
    } else {
      setAutoCols(Object.keys(data[0] || {}).map((accessor) => ({
        accessor,
        Header: String(accessor).toLocaleUpperCase(),
      })))
    }
  }, [columns, data])
  const _cols = useMemo(() => autoCols, [autoCols])
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns: _cols, data: _data })

  return (
    <MUITable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
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
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MUITable>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
}
Table.defaultProps = {
  columns: [],
  data: [],
}

export default Table
