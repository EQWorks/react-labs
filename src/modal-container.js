import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: ({ maxWidth }) => maxWidth,
    width: '80%',
    background: '#fff',
    borderRadius: 10,
    padding: 16,
    '&:focus': {
      outline: 'none',
    },
  },
}))


const ModalContainer = ({ maxWidth, children }) => {
  const classes = useStyles({ maxWidth })
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
}

ModalContainer.defaultProps = {
  maxWidth: 768,
}

export default ModalContainer
