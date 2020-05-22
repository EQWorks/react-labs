import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  primary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.8),
    },
    '&:disabled': {
      color: theme.palette.white,
      backgroundColor: theme.palette.disabled,
    },
  },
  secondary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: 'none',
    border: 'solid 1px',
    backgroundColor: 'rgba(255,255,255,0)',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.1),
      color: theme.palette.primary.main,
    },
  },
  tertiary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: 'none',
    backgroundColor: 'rgba(255,255,255,0)',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0)',
      color: fade(theme.palette.primary.main, 0.8),
    },
  },
}));
const DynamicButton = ({type, disabled, addIcon, onWhichSide, size, children, onClick }) => {
  const classes = useStyles();
  console.log(size);
  const side = `${onWhichSide}` + "Icon";
  const iconProps = {
    [side]: addIcon,
  };
  return (
    <Button
      className={classes[type]}
      disabled={disabled}
      size={size}
      {...iconProps}
      disableRipple
      disableElevation
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

DynamicButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  addIcon: PropTypes.node,
  onWhichSide: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
};

DynamicButton.defaultProps = {
  type: 'primary',
  disabled: false,
  addIcon: null,
  onWhichSide: "start",
  size: "medium",
  children: "Call to action",
};

export default DynamicButton;
