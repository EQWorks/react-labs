import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
    width: 36,
    height: 16,
    padding: 0,
    margin: theme.spacing(0.5),
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(18px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: props => props.disabled ? theme.palette.grey[500] : theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {
  },
}));

const StyledSwitch = (props) => {
  const classes = useStyles(props);
  return (
    <Switch
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        input: classes.input,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
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
