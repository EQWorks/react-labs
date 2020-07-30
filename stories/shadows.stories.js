import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

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
      <Box boxShadow={0}>Shadow 0</Box>
      <Box boxShadow={1}>Shadow 1</Box>
      <Box boxShadow={2}>Shadow 2</Box>
      <Box boxShadow={3}>Shadow 3</Box>
      <Box boxShadow={4}>Shadow 4</Box>
    </div>
  )
}