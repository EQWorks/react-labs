import React from 'react'
import PropTypes from 'prop-types'
import { Modal as MUIModal, Fade, Backdrop } from '@material-ui/core'
import './style/layout.css'

const Modal = ({ children, open, ...props }) => <MUIModal className="flex-layout3"
  closeAfterTransition
  BackdropComponent={Backdrop}
  open={open}
  {...props}>
  <Fade in={open}>
    {children} 
  </Fade>
</MUIModal>
  

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
