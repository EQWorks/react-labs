import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "100%",
    },
    title: {
      padding: "8px",
    },
  };
});

// deprecated
const WidgetNumber = ({ title, value, isPercentage }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.title} variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {value}
        {isPercentage ? "%" : ""}
      </Typography>
    </Paper>
  );
};

WidgetNumber.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  isPercentage: PropTypes.bool,
};

WidgetNumber.defaultProps = {
  title: "Untitled",
  value: "N/A",
  isPercentage: false,
};

export default WidgetNumber;
