import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  container: {
    '& *': {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: '5rem',
      justifyContent: 'center',
      margin: '10px',
      width: '8rem'
    }
  }
}))

export default {
  component: Box,
  title: 'Shadows'
}

export const Default = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Box boxShadow={0}><Typography variant='body1'>Shadow 0</Typography></Box>
      <Box boxShadow={1}><Typography variant='body1'>Shadow 1</Typography></Box>
      <Box boxShadow={2}><Typography variant='body1'>Shadow 2</Typography></Box>
      <Box boxShadow={3}><Typography variant='body1'>Shadow 3</Typography></Box>
      <Box boxShadow={4}><Typography variant='body1'>Shadow 4</Typography></Box>
    </div>
  )
}