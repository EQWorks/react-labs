import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import theme from "../src/theme/index";

const styles = {
  contained: {
    boxShadow: "none",
    "&:disabled": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      opacity: 0.5,
    },
    "&:hover": {
      boxShadow: "none",
    },
  },
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary[800],
    },
  },
  outlinedPrimary: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    "&:disabled": {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[50],
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  textPrimary: {
    color: theme.palette.primary.main,
    padding: "6px 16px",
    "&:disabled": {
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[50],
    },
  },
  textSizeSmall: {
    padding: "4px 10px",
  },
  textSizeLarge: {
    padding: "8px 22px",
  },
};

const ButtonComponent = ({ children, type, ...props }) => {
  const styleProps = {
    color: "primary",
    type: "primary",
  };
  if (type === "tertiary") {
    props.variant = "text";
  } else if (type === "secondary") {
    props.variant = "outlined";
  } else {
    props.variant = "contained";
  }

  return (
    <Button disableRipple {...styleProps} {...props}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

ButtonComponent.defaultProps = {
  children: "Button",
  type: "primary",
};

export default withStyles(styles)(ButtonComponent);
