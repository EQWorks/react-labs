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
  /**
    * If `true`, the ardornment component will be treated as a `Button` component.
  */
  adornmentButton: PropTypes.bool,
  /**
    * The function executed on selecting the adornment component.
  */
  adornmentOnClick: PropTypes.func,
  /**
    * If `true`, the input element will be focused during the first mount.
  */
  autoFocus: PropTypes.bool,
  /**
    * The end adornment (item after input value) of the component.
  */
  endAdornment: PropTypes.any,
  /**
    * If `true`, the label will be displayed in an error state.
  */
  error: PropTypes.bool,
  /**
    * Set the style of the component to be the full width of parent.
  */
  fullWidth: PropTypes.bool,
  /**
    * The height of the component.
  */
  height: PropTypes.string,
  /**
    * The content of the helperText component.
  */
  helperText: PropTypes.string,
  /**
    * The inputProps of the component.
  */
  inputProps: PropTypes.object,
  /**
    * The text label of the component.
  */
  label: PropTypes.string.isRequired,
  /**
    * If `true`, a textarea element will be rendered instead of an input.
  */
  multiline: PropTypes.bool,
  /**
    * The short hint displayed in the input before the user enters a value.
  */
  placeholder: PropTypes.string,
  /**
    * Number of rows to display when multiline option is set to true. Only activated when `multiline` is set to `true`.
  */
  rows: PropTypes.number,
  /**
    * The start adornment (item before input value) of the component.
  */
  startAdornment: PropTypes.any,
  /**
    * The width of the component.
  */
  width: PropTypes.string,
}

TextField.defaultProps = {
  adornmentButton: false,
  adornmentOnClick: null,
  autoFocus: false,
  endAdornment: '',
  error: false,
  fullWidth: false,
  height: '42px',
  helperText: '',
  inputProps: {},
  label: 'Label',
  multiline: false,
  startAdornment: '',
  width: '380px',
}

export default TextField
