import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

import ProgressWithLabel from './progress-with-label'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    centeredProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
      color: theme.palette.primary.main,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    linearBackdrop: {
      position: 'absolute',
      width: '80%',
      top: '50%',
      left: '10%',
      marginTop: -12,
      marginLeft: -12,
    },
    linearBackdropText: {
      position: 'absolute',
      textAlign: 'center',
      width: '100%',
      top: '50%',
      color: '#fff',
      marginTop: '5px',
    },
  }
})

const Loader = ({
  open,
  backdrop,
  action,
  message,
  progress,
  children,
  skeletonConfig,
}) => {
  const classes = useStyles()
  const [bufferProgress, setBufferProgress] = useState(progress)
  const [buffer, setBuffer] = useState(10)
  const progressRef = useRef(() => {})

  if (action === 'linear buffer' || action === 'linear buffer label') {
    useEffect(() => {
      progressRef.current = () => {
        if (bufferProgress > 100) {
          setBufferProgress(0)
          setBuffer(10)
        } else {
          const progressDiff = Math.random() * 10
          const bufferDiff = Math.random() * 10
          setBufferProgress(bufferProgress + progressDiff)
          setBuffer(bufferProgress + progressDiff + bufferDiff)
        }
      }
    })
    useEffect(() => {
      const timer = setInterval(() => progressRef.current(), 500)
      return () => clearInterval(timer)
    }, [])
  }

  const modalBody = (
    <>
      {action === 'linear' && (
        <LinearProgress className={classes.linearBackdrop} />
      )}
      {action === 'linear determinate' && (
        <LinearProgress
          className={classes.linearBackdrop}
          variant="determinate"
          value={progress}
        />
      )}
      {action === 'linear buffer' && (
        <LinearProgress
          className={classes.linearBackdrop}
          variant="buffer"
          value={bufferProgress}
          valueBuffer={buffer}
        />
      )}
      {action === 'linear determinate label' && (
        <ProgressWithLabel
          action={action}
          variant="determinate"
          value={progress}
        />
      )}
      {action === 'linear buffer label' && (
        <ProgressWithLabel
          action={action}
          variant="buffer"
          value={bufferProgress}
          valueBuffer={buffer}
        />
      )}
      <Typography className={classes.linearBackdropText}>{message}</Typography>
    </>
  )

  /* Loading as backdrop */
  if (backdrop) {
    if (action.startsWith('linear')) {
      return <Modal open={open}>{modalBody}</Modal>
    }
    return (
      <Backdrop className={classes.backdrop} open={open}>
        <Grid container direction="column" justify="center" alignItems="center">
          {action === 'circular' && <CircularProgress color="inherit" />}
          {action === 'circular determinate' && (
            <CircularProgress
              color="inherit"
              variant="static"
              value={progress}
            />
          )}
          {action === 'circular determinate label' && (
            <ProgressWithLabel
              color="inherit"
              action={action}
              value={progress}
            />
          )}
          <Typography>{message}</Typography>
        </Grid>
      </Backdrop>
    )
  }

  /* Loading as loading wrapper with skeleton */
  if (skeletonConfig)
    return (
      <div>
        {!open && children}
        {open && skeletonConfig}
      </div>
    )

  /* Loading as loading wrapper */
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {children}
        {open && action === 'circular' && (
          <CircularProgress
            size={24}
            color="inherit"
            className={classes.centeredProgress}
          />
        )}
        {open && action === 'circular determinate' && (
          <CircularProgress
            size={24}
            color="inherit"
            className={classes.centeredProgress}
            variant="static"
            value={progress}
          />
        )}
        {open && action === 'circular determinate label' && (
          <span className={classes.centeredProgress}>
            <ProgressWithLabel
              size={24}
              color="inherit"
              action={action}
              value={progress}
              labelStyle={{ fontSize: '50%' }}
            />
          </span>
        )}
      </div>
    </div>
  )
}

Loader.propTypes = {
  /**
    * The type of loader component.
  */
  action: PropTypes.oneOf([
    'circular',
    'circular determinate',
    'circular determinate label',
    'linear buffer',
    'linear buffer label',
    'linear determinate',
    'linear determinate label',
  ]).isRequired,
  /**
    * Toggle full screen loading backdrop styling.
  */
  backdrop: PropTypes.bool,
  /**
    * The children of the component message.
  */
  children: PropTypes.node,
  /**
    * The component message.
  */
  message: PropTypes.string,
  /**
    * Toggle the component on or off.
  */
  open: PropTypes.bool.isRequired,
  /**
    * The amount of component completion. Must be used with `determinate`.
  */
  progress: PropTypes.number,
  /**
    * The loading skeleton configuration.
  */
  skeletonConfig: PropTypes.node,
}

Loader.defaultProps = {
  action: 'circular',
  backdrop: false,
  children: null,
  message: '',
  progress: 0,
  skeletonConfig: null,
}

export default Loader
