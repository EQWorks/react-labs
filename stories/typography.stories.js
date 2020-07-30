import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  container: {
    '& *': {
      display: 'block',
      margin: '0 0 20px 0'
    }
  }
})

export default {
  title: 'Typography',
  component: Typography
}

export const Default = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h1'>h1/Open Sans/Light/96px</Typography>
      <Typography variant='h2'>h2/Open Sans/Light/60px</Typography>
      <Typography variant='h3'>h3/Open Sans/Regular/48px</Typography>
      <Typography variant='h4'>h4/Open Sans/Regular/34px</Typography>
      <Typography variant='h5'>h5/Open Sans/Semibold/24px</Typography>
      <Typography variant='h6'>h6/Open Sans/Bold/20px</Typography>
      <Typography variant='subtitle1'>subtitle1/Open Sans/Semibold/16px</Typography>
      <Typography variant='body1'>body1/Open Sans/Regular/14px</Typography>
      <Typography variant='button'>button/Open Sans/Regular/14px</Typography>
      <Typography variant='caption'>caption/Open Sans/Regular/12px</Typography>
      <Typography variant='overline'>overline/Noto Sans/Regular/10px</Typography>
    </div>
  )
}
