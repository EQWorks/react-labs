import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'

DateRangeFilter.propTypes = {
  column: PropTypes.object.isRequired,
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function DateRangeFilter({ column: { filterValue, preFilteredRows, setFilter, id } }) {
  const classes = useStyles()
  const reducer = (acc, row) => {
    if (Object.values(acc).length) {
      moment(row.values.date).isAfter(acc.min) ?
        moment(row.values.date).isAfter(acc.max) ?
          acc.max = row.values[id]
          : null
        : acc.min = row.values[id]
      return acc
    } else {
      acc.min = row.values[id]
      acc.max = row.values[id]
      return acc
    }
  }

  const { min, max } = useMemo(() => {
    return preFilteredRows.reduce(reducer, {})
  })

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="start-date"
        label="From"
        type="date"
        defaultValue={(filterValue || [])[0] || min}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={({ target: { value } }) => {
          setFilter((old = []) => [value ? value : undefined, old[1]])
        }}
      />
      <TextField
        id="end-date"
        label="To"
        type="date"
        defaultValue={(filterValue || [])[1] || max}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={({ target: { value } }) => {
          setFilter((old = []) => [old[0], value ? value : undefined])
        }}
      />
    </form>
  )
}

export const filterDates = (rows, _, filterValue) => {
  return rows.filter(row => {
    const rowValue = row.values.date
    return moment(rowValue).isSameOrAfter(filterValue[0]) && moment(rowValue).isSameOrBefore(filterValue[1])
  })
}

