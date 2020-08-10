import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => {
  return {
    linearBackdrop: {
      position: 'absolute',
      width: '80%',
      top: '50%',
      left: '10%',
      marginTop: -12,
      marginLeft: -12
    },
    linearProgressLabel: {
      color: '#c8cbcf'
    }
  }
})

const ProgressWithLabel = ({ action, labelStyle, ...props }) => {
  const classes = useStyles()
  if (action.startsWith('linear'))
    return (
      <Box
        display="flex"
        alignItems="center"
        className={classes.linearBackdrop}
      >
        <Box width="100%" mr={1}>
          <LinearProgress {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography
            variant="body2"
            className={classes.linearProgressLabel}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    )
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          style={labelStyle}
          variant="caption"
          component="div"
          color="inherit"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

ProgressWithLabel.propTypes = {
  action: PropTypes.string,
  labelStyle: PropTypes.object,
  value: PropTypes.any
}

ProgressWithLabel.defaultProps = {
  action: '',
  labelStyle: {},
  value: ''
}

export default ProgressWithLabel
