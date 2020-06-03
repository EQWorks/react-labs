import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import PropTypes from 'prop-types';

const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
const borderWidth = 1;
const width = pxToRem(56);
const height = pxToRem(34);
const size = pxToRem(22);
const gap = (34 - 22) / 2;

const useStyles = makeStyles((theme) => ({
  root: {
    width,
    height,
    padding: 0,
    margin: theme.spacing(1),
    overflow: 'unset',
  },
  switchBase: {
    padding: pxToRem(gap),
    '&$checked': {
      color: '#fff',
      transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 'none',
      },
      '& $thumb': {
        backgroundColor: '#fff',
      },
    },
    '&:disabled':{
      backgroundColor:'#fff',
    }
  },
  track: {
    borderRadius: 40,
    border: `solid ${theme.palette.grey[400]}`,
    borderWidth,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
    boxSizing: 'border-box',
  },
  thumb: {
    boxShadow: 'none',
    backgroundColor: theme.palette.grey[400],
    width: size,
    height: size,
  },
  checked: {},
  disabled:{
    backgroundColor: '#fff',
    '&$checked': {
      '& + $track':{
        opacity: 0.5,
      },
      '& $thumb':{
        opacity: 0.5,
      },
    },
  }
}));

const StyledSwitch = (props) => {
  const classes = useStyles();
  return (
    <Switch 
    classes={classes}
    {...props}
    />
  );
};

StyledSwitch.propTypes = {
  disabled: PropTypes.bool,
}

StyledSwitch.defaultProps = {
  disabled: false,
}

export default StyledSwitch;


