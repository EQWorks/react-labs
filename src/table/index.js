import React, { useState, useEffect, useMemo, Children } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import MUITable from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import { makeStyles } from '@material-ui/core/styles'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useFilters,
} from 'react-table'

import TableColumn from './table-column'
import TableToolbar from './table-toolbar'
import TableSortLabel from './table-sort-label'
import TableFilterLabel from './table-filter-label'
import DefaultFilter from './filters/default-filter'
import SelectionFilter from './filters/selection-filter'
import RangeFilter from './filters/range-filter'


const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: 'body',
    fontWeight: 600,
    backgroundColor: theme.palette.grey[50],
  },
  grow: {
    flexGrow: 1,
  },
}))

const getHeader = (s) => [
  s.charAt(0).toUpperCase(),
  s.slice(1).replace(/_/g, ' '),
].join('')

const useTableConfig = ({ data, hiddenColumns, children, columns }) => {
  const [autoCols, setAutoCols] = useState([])
  const [hidden, setHidden] = useState([])

  useEffect(() => {
    if (!children && !columns) {
      setAutoCols(Object.keys(data[0] || {}).map((accessor) => ({
        accessor,
        Header: getHeader(accessor),
      })))
    } else {
      const _columns = Array.isArray(columns) && columns.length > 0
        ? columns
        : Children.toArray(children)
          .filter((c) => c.type === TableColumn || c.type.name === 'TableColumn')
          .map((c) => c.props)

      setAutoCols(_columns)

      // initial column hidden states
      const _hidden = _columns.filter((c) => c.hidden).map((c) => typeof c.accessor === 'function' ? c.id : c.accessor)
      setHidden(_hidden.length ? _hidden : (hiddenColumns || []))
    }
  }, [columns, data, children])

  // memoized columns and data for useTable hook
  const _cols = useMemo(() => autoCols, [autoCols])
  const _data = useMemo(() => data, [data])

  return {
    _cols,
    _data,
    hidden,
  }
}

const Table = ({
  columns,
  data,
  children,
  downloadable,
  hiddenColumns,
  tableProps,
  headerGroupProps,
  sortBy,
}) => {
  const classes = useStyles()
  // custom table config hook
  const { _cols, _data, hidden } = useTableConfig({ data, hiddenColumns, children, columns })
  // useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    allColumns,
    prepareRow,
    toggleHideColumn,
    setGlobalFilter,
    preGlobalFilteredRows,
    setPageSize,
    gotoPage,
    visibleColumns,
    state: { pageSize, pageIndex, globalFilter },
  } = useTable(
    {
      columns: _cols,
      data: _data,
      initialState: {
        hiddenColumns: hidden,
        sortBy: useMemo(() => Array.isArray(sortBy) ? sortBy : [sortBy], [sortBy]),
      },
    },
    // plugin hooks - order matters
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
  )

  return (
    <>
      {(_data.length > 0) && (
        <TableToolbar
          allColumns={allColumns}
          visibleColumns={visibleColumns}
          toggleHideColumn={toggleHideColumn}
          downloadable={downloadable}
          data={data}
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}
      {visibleColumns.length > 0 ? (
        <>
          <TableContainer>
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
                        <TableSortLabel {...column} />
                        {column.canFilter && (<TableFilterLabel column={column} />)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row, i) => {
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
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[
              5,
              10,
              25,
              { label: 'All', value: data.length },
            ]}
            colSpan={3}
            count={data.length}
            rowsPerPage={pageSize}
            page={pageIndex}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onChangePage={(_, page) => { gotoPage(page) }}
            onChangeRowsPerPage={({ target: { value }}) => {
              setPageSize(Number(value))
            }}
          />
        </>
      ) : (
        <Card>
          <CardContent>
            <Typography variant='body1'>
              No visible columns
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
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
  downloadable: PropTypes.bool,
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  tableProps: PropTypes.object,
  headerGroupProps: PropTypes.object,
  sortBy: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
}
Table.defaultProps = {
  columns: null,
  children: null,
  data: [],
  downloadable: true,
  hiddenColumns: [],
  tableProps: {},
  headerGroupProps: {},
  sortBy: {},
}
Table.Column = TableColumn
Table.filters = { DefaultFilter, SelectionFilter, RangeFilter }

export default Table
