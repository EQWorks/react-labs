import React, { cloneElement, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
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
  linearProgressLabel: {
    color: '#c8cbcf'
  }
}))

/* eslint-disable react/prop-types */
const ProgressWithLabel = ({ action, labelStyle, ...props }) => {
  const classes = useStyles()
  const actionType = action.split(' ')[0]
  if (actionType === 'circular') return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress variant='static' {...props} />
      <Box top={0} left={0} bottom={0} right={0} position='absolute' display='flex' alignItems='center' justifyContent='center'>
        <Typography style={labelStyle} variant='caption' component='div' color='inherit'>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
  if (actionType === 'linear') return (
    <Box display='flex' alignItems='center' className={classes.linearBackdrop}>
      <Box width='100%' mr={1}>
        <LinearProgress {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant='body2' className={classes.linearProgressLabel}>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

const Transition = ({ open, backDrop, action, message, progress, childProps, children }) => {
  const classes = useStyles()
  const [bufferProgress, setBufferProgress] = useState(progress)
  const [buffer, setBuffer] = useState(10)
  const progressRef = useRef(() => {})
  const actionType = action.split(' ')[0]

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
      {action === 'linear'
        && <LinearProgress className={classes.linearBackdrop} />}
      {action === 'linear determinate'
        && <LinearProgress className={classes.linearBackdrop} variant='determinate' value={progress} />}
      {action === 'linear buffer'
        && <LinearProgress className={classes.linearBackdrop} variant='buffer' value={bufferProgress} valueBuffer={buffer} />}
      {action === 'linear determinate label'
        && <ProgressWithLabel action={action} variant='determinate' value={progress} />}
      {action === 'linear buffer label'
        && <ProgressWithLabel action={action} variant='buffer' value={bufferProgress} valueBuffer={buffer} />}
      <Typography className={classes.linearBackdropText}>{message}</Typography>
    </>
  )

  /* transition as backdrop */
  if (backDrop) {
    if (actionType === 'linear') {
      return <Modal open={open}>{modalBody}</Modal>
    }
    if (actionType === 'circular') {
      return (
        <Backdrop className={classes.backdrop} open={open}>
          <Grid container direction='column' justify='center' alignItems='center'>
            {action === 'circular' 
              && <CircularProgress color='inherit' />}
            {action === 'circular determinate' 
              && <CircularProgress color='inherit' variant='static' value={progress} />}
            {action === 'circular determinate label'
              && <ProgressWithLabel color='inherit' action={action} value={progress} />}
            <Typography>{message}</Typography>
          </Grid>
        </Backdrop>
      )
    }
  }

  /* transition as loading wrapper */
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {cloneElement(children, { ...childProps })}
        {open && action === 'circular' 
          && <CircularProgress size={24} color='inherit' className={classes.centeredProgress} />}
        {open && action === 'circular determinate'
          && <CircularProgress size={24} color='inherit' className={classes.centeredProgress} variant='static' value={progress} />}
        {open && action === 'circular determinate label'
          && <span className={classes.centeredProgress}>
            <ProgressWithLabel size={24} color='inherit' action={action} value={progress} labelStyle={{ fontSize: '50%' }} />
          </span>}
      </div>
    </div>
  )
}

const propTypes = {
  action: PropTypes.string.isRequired,
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
  backDrop: PropTypes.bool,
  progress: PropTypes.number,
  childProps: PropTypes.object,
  children: PropTypes.node,
}

Transition.propTypes = propTypes
export default Transition
