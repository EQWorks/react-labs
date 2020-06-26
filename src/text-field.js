import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MUITextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'


const TextField = ({
  inputLabelProps,
  inputProps,
  label,
  startAdornment,
  endAdornment,
  ...props
}) => {
  const [values, setValues] = useState({
    show: false,
  })

  const inp = {
    ...inputProps,
    startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
    endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
  }


  const handleShowValue = () => setValues({ ...values, show: !values.showPassword })

  return (
    <div>
      <MUITextField
        label={label}
        // inputProps={inputProps}
        InputLabelProps={inputLabelProps}
        {...props}
        InputProps={inp}
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
}

TextField.defaultProps = {
  inputLabelProps: {},
  inputProps: {},
  label: 'Label',
  startAdornment: '',
  endAdornment: '',
}

export default TextField
