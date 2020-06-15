import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

import Search from './search'
import Download from './download'
import Toggle from './toggle'


const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}))

const TableToolbar = ({
  // Search
  preGlobalFilteredRows,
  setGlobalFilter,
  // Toggle
  toggleHideColumn,
  allColumns, // + Download
  // Download
  downloadable,
  data,
  visibleColumns,
}) => {
  const classes = useStyles()

  return (
    <Toolbar>
      <Search
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
      />
      <div className={classes.grow} />
      {allColumns.some((c) => !c.noToggle) && (
        <Toggle
          allColumns={allColumns}
          toggleHideColumn={toggleHideColumn}
        />
      )}
      {downloadable && (
        <Download
          data={data}
          allColumns={allColumns}
          visibleColumns={visibleColumns}
        />
      )}
    </Toolbar>
  )
}

TableToolbar.propTypes = {
  ...Search.propTypes,
  ...Download.propTypes,
  ...Toggle.propTypes,
}
export default TableToolbar
