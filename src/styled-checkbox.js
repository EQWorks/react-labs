import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const checkMark =
  'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath' +
  ' fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 ' +
  '1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z\' fill=\'%23fff\'/%3E%3C/svg%3E")'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(0.5),
      '&&:hover': {
        backgroundColor: 'transparent'
      }
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      backgroundColor: theme.palette.grey[50],
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      'input:hover ~ &': {
        transition: 'all .2s',
        border: '1px solid',
        borderColor: theme.palette.primary[100],
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.action.hover
      },
      'input:disabled ~ &': {
        opacity: 0.5,
        pointerEvents: 'none'
      }
    },
    checkedIcon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      border: '1px solid  rgba(0,0,0,0)',
      backgroundColor: theme.palette.primary.main,
      backgroundImage: checkMark,
      'input:hover ~ &': {
        transition: 'all .2s',
        border: '1px solid',
        borderColor: theme.palette.primary[800],
        backgroundColor: theme.palette.primary[800]
      },
      'input:disabled ~ &': {
        opacity: 0.5
      }
    }
  }
})

const StyledCheckbox = ({ checked, ...rest }) => {
  const classes = useStyles()
  return (
    <Checkbox
      disableRipple
      checked={checked}
      className={classes.root}
      icon={<span className={classes.icon} />}
      checkedIcon={
        <span className={checked ? classes.checkedIcon : classes.icon} />
      }
      {...rest}
    />
  )
}

StyledCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

StyledCheckbox.defaultProps = {
  checked: false,
  onChange: null,
  disabled: false
}

export default StyledCheckbox
