import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Fade, Grid, Backdrop } from '@material-ui/core'
import './style/layout.css'

const useStyles = makeStyles(() => ({
  modalContainer: {
    width: '80%',
    background: '#fff',
    borderRadius: 10,
    padding: 16,
    '&:focus': {
      outline: 'none',
    },
  },
}))

const Modal = ({ children, open, ...props }) => {
  const classes = useStyles()
  console.log(typeof open)
  return (
    <MUIModal className="flex-layout3"
      closeAfterTransition
      BackdropComponent={Backdrop}
      open={open}
      {...props}>
      <Fade in={open}>
        <Grid container className={classes.modalContainer}>
          {children}
        </Grid>    
      </Fade>
    </MUIModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

Modal.defaultProps = {
  children: <div>Empty</div>,
}

export default Modal
