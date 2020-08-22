import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'


const useStyles = makeStyles(() => ({
  sliderInput: {
    boxSizing: 'border-box',
    marginRight: '4px',
    padding: '4px',
    border: '1px solid',
    borderRadius: '4px',
  },
  verHeight: { height: '300px' },
}))
const SliderGroup = ({ sliderStep, options, direction, onChange }) => {
  const classes = useStyles()
  const orientation = direction === 'column' ? 'vertical' : 'horizontal'
  const gridContainerProps = direction === 'column'
    ? { container: true, direction: 'row-reverse', justify: 'center', alignItems:'center' }
    : {}
  const gridSliderProps = direction === 'column' ? { item: true, xs: 6 } : {}
  const gridInputProps = direction === 'column'
    ? {
      item: true,
      container: true,
      direction: 'column-reverse',
      alignItems: 'center',
      justify: 'space-between',
    } 
    : {}

  let [min, max, initialMin = '', initialMax = ''] = options
  if (!initialMin && initialMin !== 0) initialMin = min
  if (!initialMax) initialMax = max

  const [val, setVal] = useState([initialMin, initialMax])
  const [currentMin, currentMax] = val

  const sliderOnChange = (_, val) => {
    setVal(val)
    onChange(val)
  }

  const minOnChange = (e) => setVal([e.target.value, currentMax])
  const maxOnChange = (e) => setVal([currentMin, e.target.value])

  return (
    <Grid {...gridContainerProps}>
      <Grid {...gridSliderProps} className={direction === 'column' ? classes.verHeight : null}>
        <Slider
          marks={sliderStep !== 1}
          value={[currentMin, currentMax]}
          step={sliderStep}
          min={min}
          max={max}
          orientation={orientation}
          onChange={sliderOnChange}
        />
      </Grid>
      <Grid {...gridSliderProps} className={direction === 'column' ? classes.verHeight : null}>
        <Grid {...gridInputProps} className={direction === 'column' ? classes.verHeight : null}>
          <FormControl>
            <Input
              className={classes.sliderInput}
              disableUnderline
              value={currentMin}
              readOnly={sliderStep !== 1}
              onChange={minOnChange}
            />
          </FormControl>
          <FormControl>
            <Input
              className={classes.sliderInput}
              disableUnderline
              value={currentMax}
              readOnly={sliderStep !==1}
              onChange={maxOnChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

SliderGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  sliderStep: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  direction: PropTypes.string,
}

SliderGroup.defaultProps = {
  direction: 'row',
}

export default SliderGroup
