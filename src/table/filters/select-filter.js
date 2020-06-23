import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'


const filterFn = (rows, id, filterValue) => {
  return rows.filter((row) => filterValue == row.values[id])
}

const SelectFilter = ({ column: { filterValue, preFilteredRows, setFilter, id } }) => {
  const options = useMemo(() => {
    const opts = new Set()
    preFilteredRows.forEach((row) => {
      opts.add(row.values[id])
    })
    return [...opts.values()]
  }, [id, preFilteredRows])

  return (
    <Select
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      value={filterValue || ''}
      onClick={(e) => { e.stopPropagation() }}
      onChange={(e) => {
        if (!e.target.value) {
          setFilter(undefined)
        } else {
          setFilter(e.target.value)
        }
      }}
    >
      <MenuItem value="">
        <em>All</em>
      </MenuItem>
      {options.map((opt) => (
        <MenuItem value={opt} key={opt}>{opt}</MenuItem>
      ))}
    </Select>
  )
}

SelectFilter.propTypes = {
  column: PropTypes.object.isRequired,
}
SelectFilter.filterFn = filterFn

const NativeSelectFilter = ({ column: { filterValue, preFilteredRows, setFilter, id } }) => {
  const options = useMemo(() => {
    const opts = new Set()
    preFilteredRows.forEach((row) => {
      opts.add(row.values[id])
    })
    return [...opts.values()]
  }, [id, preFilteredRows])

  return (
    <select
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      value={filterValue || ''}
      onClick={(e) => { e.stopPropagation() }}
      onChange={(e) => {
        if (!e.target.value) {
          setFilter(undefined)
        } else {
          setFilter(e.target.value)
        }
      }}
    >
      <option value="">All</option>
      {options.map((opt) => (
        <option value={opt} key={opt}>{opt}</option>
      ))}
    </select>
  )
}

NativeSelectFilter.propTypes = {
  column: PropTypes.object.isRequired,
}
NativeSelectFilter.filterFn = filterFn

export { SelectFilter, NativeSelectFilter }
