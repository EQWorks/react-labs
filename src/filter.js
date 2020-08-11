import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'

import DynamicButton from './dynamic-button'


const useStyles = makeStyles(() => ({
  popper: { zIndex: 1 },
  formControl: { margin: '15px 15px 5px 15px' },
  formLabel: { fontWeight: 'bolder', marginBottom: '10px' },
  checkboxRoot: { '&:hover': { backgroundColor: 'transparent' }, padding: '0px 5px 5px 10px' },
  select: { paddingLeft: '15px' },
}))

const Filter = ({
  options,
  anchorEl,
  open,
  filterVals,
  selectedAll,
  checkboxOnChange,
  selectAllOnClick,
  formLabel,
}) => {
  const classes = useStyles()
  return (
    <Popper open={open} anchorEl={anchorEl} transition disablePortal className={classes.popper}>
      <Paper>
        <Grid container justify='flex-start' alignItems='flex-start' direction='column'>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend' className={classes.formLabel}>{formLabel}</FormLabel>
            <FormGroup>
              {options.map((c) => (
                <div key={c}>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        className={classes.checkboxRoot}
                        checked={filterVals[c]}
                        onChange={checkboxOnChange}
                        name={c}
                        disableRipple
                        color='primary'
                      />
                    )}
                    label={c}
                  />
                </div>
              ))}
            </FormGroup>
          </FormControl>
          {selectAllOnClick && <div className={classes.select}>
            <DynamicButton
              type='tertiary'
              style={{ padding: '0px', margin: '0px 0px 15px 0px' }}
              onClick={selectAllOnClick}
            >
              {selectedAll ? 'Unselect All' : 'Select All'}
            </DynamicButton>
          </div>}
        </Grid>
      </Paper>
    </Popper>
  )
}

Filter.propTypes = {
  options: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
  filterVals: PropTypes.object.isRequired,
  anchorEl: PropTypes.any,
  selectAllOnClick: PropTypes.func,
  selectedAll: PropTypes.bool,
  formLabel: PropTypes.string,
}

Filter.defaultProps = {
  anchorEl: '',
  selectAllOnClick: null,
  selectedAll: false,
  formLabel: '',
}

export default Filter
