import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import clsx from 'clsx'

import { palette, typography } from './themes'


const useStyles = makeStyles((t) => {
  const theme = {
    ...t,
    typography: {
      ...t.typography,
      ...typography,
    },
    palette: {
      ...t.palette,
      ...palette,
    },
  }

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
        backgroundColor: theme.palette.state.hoverWhite,
        borderColor: theme.palette.shade.primary[100],
      },
      'input:disabled ~ &': {
        opacity: 0.5,
      },
    },
    checkedIcon: {
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.state.hoverColored}, ${theme.palette.state.hoverColored})`,
        borderColor: theme.palette.state.hoverWhite,
      },
      'input:disabled ~ &': {
        opacity: 0.5,
      },
    },
  }
})

const StyledRadio = props => {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <span className={clsx(classes.icon, classes.checkedIcon)} />
      }
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default StyledRadio;
