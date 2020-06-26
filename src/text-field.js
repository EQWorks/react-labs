import React from 'react'
import PropTypes from 'prop-types'

import MUITextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'


const TextField = ({
  inputLabelProps,
  inputProps,
  label,
  startAdornment,
  endAdornment,
  adornmentButton,
  adornmentOnClick,
  ...props
}) => {
  const inp = {
    startAdornment: adornmentButton && startAdornment ?
      (<InputAdornment position="start">
        <IconButton onMouseDown={(e) => e.preventDefault()} disableRipple onClick={adornmentOnClick}>
          {startAdornment}
        </IconButton>
      </InputAdornment>)
      : (<InputAdornment position="start">{startAdornment}</InputAdornment>),
    endAdornment: adornmentButton && endAdornment ?
      (<InputAdornment position="end">
        <IconButton onMouseDown={(e) => e.preventDefault()} disableRipple onClick={adornmentOnClick}>
          {endAdornment}
        </IconButton>
      </InputAdornment>)
      : (<InputAdornment position="end">{endAdornment}</InputAdornment>),
  }

  return (
    <div>
      <MUITextField
        label={label}
        inputProps={inputProps}
        InputProps={startAdornment || endAdornment ? inp : {}}
        InputLabelProps={inputLabelProps}
        {...props}
      />
    </div>
  )
}

TextField.propTypes = {
  inputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  adornmentButton: PropTypes.bool,
  adornmentOnClick: PropTypes.func,
}

TextField.defaultProps = {
  inputLabelProps: {},
  inputProps: {},
  label: 'Label',
  startAdornment: '',
  endAdornment: '',
  adornmentButton: false,
  adornmentOnClick: null,
}

export default TextField
