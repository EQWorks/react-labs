import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      background: 'transparent',
    },
  },
  checkedIcon: {
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.primary.light,
    },
    'input:disabled ~ &': {
      backgroundColor: theme.palette.disabled,
      
    },
  },
}));

const StyledRadio = (props) => {
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
