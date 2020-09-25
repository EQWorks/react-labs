import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'

const useStyles = makeStyles(() => {
  return {
    checkmark: {
      backgroundColor: '#eee',
      height: '25px',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '25px',
      '&:after': {
        content: '',
        display: 'none',
        position: 'absolute',
      },
    },
    container: {
      cursor: 'pointer',
      display: 'block',
      margin: '0 0 12px 0',
      padding: '0 0 0 35px',
      position: 'relative',
      userSelect: 'none',
    },
    input: {
      cursor: 'pointer',
      height: 0,
      opacity: 0,
      position: 'absolute',
      width: 0,
      '&:checked': {
        backgroundColor: '#2196F3',
      },
    },
  }
})

const Checkbox = ({ disabled, id, label, name, value }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        disabled={disabled}
        id={id}
        name={name}
        type='checkbox'
        value={value}
      />
      <span className={classes.checkmark}></span>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

Checkbox.propTypes = {
  /**
    * If true, the component is checked.
  */
  checked: PropTypes.bool,
  /**
    * If true, the checkbox will be disabled.
  */
  disabled: PropTypes.bool,
  /**
    * The id of the element.
  */
  id: PropTypes.string,
  /**
    * The text to be used in an enclosing label element.
  */
  label: PropTypes.string,
  /**
    * The name of the component.
  */
  name: PropTypes.string,
  /**
    * The value of the component.
  */
  value: PropTypes.any,
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: 'Hello there',
}

export default Checkbox
