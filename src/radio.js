import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MUIRadio from '@material-ui/core/Radio'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(0.5),
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[50],
      'input:hover ~ &': {
        transition: 'all .3s',
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.primary[100],
      },
      'input:disabled ~ &': {
        opacity: 0.5,
      },
    },
    checkedIcon: {
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.action.hover}, ${theme.palette.action.hover})`,
        borderColor: theme.palette.action.hover,
      },
      'input:disabled ~ &': {
        opacity: 0.5,
      },
    },
  }
})

const Radio = (props) => {
  const classes = useStyles()
  return (
    <MUIRadio
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      className={classes.root}
      color='default'
      data-testid='radio'
      disableRipple
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

export default Radio
