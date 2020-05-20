import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  disabled: {
    textTransform: "none",
    border: "solid 1px",
    color: theme.palette.primary.main,
    backgroundColor: 'none',
    '&:hover': {
      border: 'solid 1px',
      backgroundColor: fade(theme.palette.primary.light, 0.1),
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
      color: theme.palette.primary.dark,
    },
  },
}));
const DynamicButton = ({ disabled, addIcon, onWhichSide, size, children, onClick }) => {
  const classes = useStyles();
  const side = `${onWhichSide}` + "Icon";
  const iconProps = {
    [side]: addIcon,
  };
  return (
    <Button
      className={disabled ? classes.disabled : classes.root}
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
  disabled: PropTypes.bool,
  addIcon: PropTypes.node,
  onWhichSide: PropTypes.string,
  onClick: PropTypes.node,
  size: PropTypes.string,
  children: PropTypes.node,
};

DynamicButton.defaultProps = {
  disabled: false,
  addIcon: null,
  onWhichSide: "start",
  size: "medium",
  children: "Call to action",
};

export default DynamicButton;
