import React from 'react'
import PropTypes from 'prop-types'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Download from './download'
import Toggle from './toggle'
import DefaultFilter from '../filters/default-filter'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}))

const TableToolbar = ({
  title,
  // Search
  preGlobalFilteredRows,
  globalFilter,
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
      {title && (
        <Typography className={classes.title} variant='h6' id='tableTitle'>
          {title}
        </Typography>
      )}
      {allColumns.some((c) => !c.disableGlobalFilter) && (
        <DefaultFilter
          preFilteredRows={preGlobalFilteredRows}
          setFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      )}
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
  title: PropTypes.string,
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  ...Download.propTypes,
  ...Toggle.propTypes,
}
TableToolbar.defaultProps = {
  title: '',
}

export default TableToolbar
