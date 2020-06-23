import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    padding: theme.spacing(1),
  },
}))

const RangeFilter = ({ column: { filterValue, preFilteredRows, setFilter, id } }) => {
  const classes = useStyles()
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div className={classes.root}>
      <Slider
        value={filterValue || [min, max]}
        onChange={(_, newValue) => {
          const [_min, _max] = newValue
          if (_min === min && _max === max) {
            setFilter(undefined)
          } else {
            setFilter(newValue)
          }
        }}
        max={max}
        min={min}
        valueLabelDisplay="on"
        aria-labelledby={`${id}-range-label`}
      />
    </div>
  )
}

RangeFilter.propTypes = {
  column: PropTypes.object.isRequired,
}
RangeFilter.filterFn = 'between'

export default RangeFilter
