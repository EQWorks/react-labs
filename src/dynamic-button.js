import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  disabled: {
    textTransform: "none",
    border: "solid 1px",
    color: theme.palette.primary.main,
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
