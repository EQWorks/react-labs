import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import theme from "../src/themes/index";

const useStyles = makeStyles((theme) => ({
  primary: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1,
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(0deg, ${theme.palette.state.hoverColored}, ${theme.palette.state.hoverColored})`,
    },
    "&:disabled": {
      color: theme.palette.common.white,
      opacity: 0.5,
    },
  },
  secondary: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1,
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    border: "solid 1px",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.state.hoverWhite,
      color: theme.palette.primary.main,
    },
    "&:disabled": {
      opacity: 0.5,
      border: "solid 1px",
      color: theme.palette.primary.main,
    },
  },
  tertiary: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1,
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textTransform: "none",
    backgroundColor: "rgba(255,255,255,0)",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.state.hoverWhite,
      color: theme.palette.primary.main,
    },
    "&:disabled": {
      opacity: 0.5,
      color: theme.palette.primary.main,
    },
  },
}));

const DynamicButtonBase = ({
  type,
  addIcon,
  onWhichSide,
  children,
  ...rest
}) => {
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

DynamicButtonBase.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  addIcon: PropTypes.node,
  onWhichSide: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
};

DynamicButtonBase.defaultProps = {
  type: "primary",
  disabled: false,
  addIcon: null,
  onWhichSide: "start",
  size: "medium",
  children: "Call to action",
  onClick: () => alert("this is a default onClick message."),
};

export default function DynamicButton({ ...props }){
  return (
    <ThemeProvider theme={theme}>
      <DynamicButtonBase {...props} />
    </ThemeProvider>
  );
};
