import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import customTheme from "../src/theme/index";

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
    <ThemeProvider theme={customTheme}>
      <Button {...styleProps} {...props}>
        {children}
      </Button>
    </ThemeProvider>
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

export default ButtonComponent;
