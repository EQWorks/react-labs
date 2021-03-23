import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    background: '#fff',
    borderRadius: 10,
    padding: 16,
    '&:focus': {
      outline: 'none',
    },
  },
}))

const ModalContainer = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContainer
