import React from 'react'
import PropTypes from 'prop-types'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const Transition = ({ action, message, open }) => {
  const classes = useStyles()

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <Grid container direction='column' justify='center' alignItems='center'>
          {action === 'load' && <CircularProgress color="inherit" />}
          <Typography>{message}</Typography>
        </Grid>
      </Backdrop>
    </div>
  )
}

const propTypes = {
  action: PropTypes.string.isRequired,
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
}

Transition.propTypes = propTypes
export default Transition
