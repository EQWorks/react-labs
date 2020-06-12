import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { useAsyncDebounce } from 'react-table'


const useSearch = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter)
  const _setFilter = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)
  const changeSearch = ({ target: { value } }) => {
    setValue(value)
    _setFilter(value)
  }

  return { value, changeSearch }
}

const Search = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const { value, changeSearch } = useSearch({ globalFilter, setGlobalFilter })

  // Global filter only works with pagination from the first page.
  // This may not be a problem for server side pagination when
  // only the current page is downloaded.

  return (
    <TextField
      id='table-search'
      variant='outlined'
      size='small'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        'aria-label': 'search',
      }}
      value={value}
      onChange={changeSearch}
      placeholder={`Search in ${preGlobalFilteredRows.length} records...`}
    />
  )
}

Search.propTypes = {
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
}

export default Search
