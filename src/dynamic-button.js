import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  primary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.hoverOnPrimary,
    },
    "&:disabled": {
      color: theme.palette.common.white,
      opacity: 0.5,
    },
  },
  secondary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    border: "solid 1px",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.hoverOnWhite,
      color: theme.palette.primary.main,
    },
    "&:disabled": {
      opacity: 0.5,
      border: "solid 1px",
      color: theme.palette.primary.main,
    },
  },
  tertiary: {
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    backgroundColor: "rgba(255,255,255,0)",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0)",
      color: theme.palette.hoverOnPrimary,
    },
    "&:disabled": {
      opacity: 0.5,
      color: theme.palette.primary.main,
    },
  },
}));
const DynamicButton = ({ type, addIcon, onWhichSide, children, ...rest }) => {
  const classes = useStyles();
  const side = `${onWhichSide}` + "Icon";
  const iconProps = {
    [side]: addIcon,
  };
  return (
    <Button
      className={classes[type]}
      disableRipple
      disableElevation
      {...iconProps}
      {...rest}
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
  type: "primary",
  disabled: false,
  addIcon: null,
  onWhichSide: "start",
  size: "medium",
  children: "Call to action",
  onClick: ()=>alert('this is a default onClick message.'),
};

export default DynamicButton;
