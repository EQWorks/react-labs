import React from 'react'
import PropTypes from 'prop-types'
import { fade, makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import grey from '@material-ui/core/colors/grey'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      'label + &': {
        marginTop: theme.spacing(0.5),
      },
      borderRadius: 4,
      border: `1px solid ${grey[300]}`,
      fontSize: theme.typography.body1,
      padding: '4px 6px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    label: {
      marginLeft: theme.spacing(1),
    },
    labelError: {
      marginLeft: theme.spacing(1),
      color: '#ea0000',
    },
    inputDefault: {
      boxShadow: `${fade(theme.palette.primary[100], 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    inputError: {
      boxShadow: `${fade(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.error.main,
    },
  }
})

const TextField = ({
  inputProps,
  label,
  startAdornment,
  endAdornment,
  adornmentButton,
  adornmentOnClick,
  helperText,
  width,
  height,
  fullWidth,
  error,
  multiline,
  ...props
}) => {
  const classes = useStyles()
  const dimensions = { width, height: multiline ? 'auto' : height }
  const inp = {
    startAdornment: (
      <InputAdornment position="start">
        {adornmentButton && startAdornment ? (
          <IconButton
            onMouseDown={(e) => e.preventDefault()}
            disableRipple
            onClick={adornmentOnClick}
          >
            {startAdornment}
          </IconButton>
        ) : (
          startAdornment
        )}
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        {adornmentButton && endAdornment ? (
          <IconButton
            onMouseDown={(e) => e.preventDefault()}
            disableRipple
            onClick={adornmentOnClick}
          >
            {endAdornment}
          </IconButton>
        ) : (
          endAdornment
        )}
      </InputAdornment>
    ),
  }

  return (
    <div>
      <InputLabel
        id="label"
        shrink
        className={error ? classes.labelError : classes.label}
      >
        {label}
      </InputLabel>
      <InputBase
        classes={{
          root: classes.root,
          focused: error ? classes.inputError : classes.inputDefault,
        }}
        style={fullWidth ? {} : dimensions}
        label={label}
        fullWidth={fullWidth}
        multiline={multiline}
        inputProps={inputProps}
        {...inp}
        {...props}
      />
      <FormHelperText
        id="helper-text"
        className={error ? classes.labelError : classes.label}
      >
        {helperText}
      </FormHelperText>
    </div>
  )
}

TextField.propTypes = {
  inputProps: PropTypes.object,
  label: PropTypes.string,
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  adornmentButton: PropTypes.bool,
  adornmentOnClick: PropTypes.func,
  helperText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
}

TextField.defaultProps = {
  inputProps: {},
  label: 'Label',
  startAdornment: '',
  endAdornment: '',
  adornmentButton: false,
  adornmentOnClick: null,
  helperText: '',
  width: '380px',
  height: '42px',
  fullWidth: false,
  error: false,
  multiline: false,
}

export default TextField
