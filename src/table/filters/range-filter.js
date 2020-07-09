import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


// based on https://stackoverflow.com/a/10601315/158111
function abbreviateNumber(value) {
  const suffixes = ['', 'k', 'm', 'b', 't']
  let newValue = value
  if (value >= 1000) {
    const suffixNum = Math.floor(String(value).length / 3)
    let shortValue = '';
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = (suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value)
      shortValue = parseFloat(shortValue.toPrecision(precision))
      const dotLessShortValue = String(shortValue).replace(/[^a-zA-Z 0-9]+/g, '')
      if (dotLessShortValue.length <= 2) {
        break
      }
    }
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1)
    }
    newValue = `${shortValue}${suffixes[suffixNum]}`
  }
  if (value % 1 != 0) {
    return value.toFixed(2)
  }
  return newValue;
}

function placeHolderformat(value) {
  if (!Number.isInteger(value)) {
    return value.toFixed(2).toString()
  }
  return value.toString()
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40ch',
    padding: theme.spacing(1),
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '18ch',
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
    <div className={classes.root} onClick={(e) => { e.stopPropagation() }}>
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
        //max={max}
        //min={min}
        valueLabelDisplay="auto"
        aria-labelledby={`${id}-range-label`}
        getAriaValueText={abbreviateNumber}
        valueLabelFormat={abbreviateNumber}
      />
      <TextField
        className={classes.text}
        id={`${id}-range-min`}
        label="min"
        type="number"
        variant="outlined"
        size="small"
        //min={min}
        //max={max}
        // placeholder={min}
        placeholder={placeHolderformat(min)}
        value={(filterValue || [])[0] || ''}
        onChange={({ target: { value } }) => {
          setFilter((old = []) => [value ? parseFloat(value) : undefined, old[1]])
        }}
      />
      <TextField
        className={classes.text}
        id={`${id}-range-max`}
        label="max"
        type="number"
        variant="outlined"
        size="small"
        min={min}
        max={max}
        placeholder={placeHolderformat(max)}
        value={(filterValue || [])[1] || ''}
        onChange={({ target: { value } }) => {
          setFilter((old = []) => [old[0], value ? parseFloat(value) : undefined])
        }}
      />
    </div>
  )
}

RangeFilter.propTypes = {
  column: PropTypes.object.isRequired,
}
RangeFilter.filterFn = 'between'

export default RangeFilter
