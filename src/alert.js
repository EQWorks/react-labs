import React from "react";
import PropTypes from "prop-types";
import MUIAlert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const Alert = ({ severity, message, header, width, height, ...props }) => {
  const dimensions = { width, height };

  return (
    <div style={dimensions}>
      {header ? (
        <MUIAlert severity={severity} {...props}>
          <AlertTitle>
            <strong>{header}</strong>
          </AlertTitle>
          {message}
        </MUIAlert>
      ) : (
        <MUIAlert severity={severity} {...props}>
          {message}
        </MUIAlert>
      )}
    </div>
  );
};

Alert.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Alert.defaultProps = {
  header: "",
  width: "100%",
  height: "auto",
};

export default Alert;
