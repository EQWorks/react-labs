import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIChip from '@material-ui/core/Chip'
import clsx from 'clsx'

import { palette } from './themes'

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: palette.error.main,
  },
  chip: {
    margin: theme.spacing(1)
  },
  primary: {
    backgroundColor: palette.primary.main,
  }
}))

const Chip = ({ backgroundColor, clickable, color, label, onClick }) => {
  const classes = useStyles()

  return <MUIChip
    className={clsx({
      [classes.chip]: true,
      [classes.error]: backgroundColor === 'error',
      [classes.primary]: backgroundColor === 'primary'
    })}
    clickable={clickable}
    label={label}
    onClick={() => onClick()}
    style={{ color: color, backgroundColor: backgroundColor }}
  />
}

Chip.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Chip.defaultProps = {
  backgroundColor: 'primary',
  clickable: false,
  color: '#FFFFFF',
  label: ''
}

export default Chip
