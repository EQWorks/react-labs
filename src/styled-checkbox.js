import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const checkMark =
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
  " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
  "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: "#f5f8fa",
    border: "1px solid  #9e9e9e",
    "input:disabled ~ &": {
      background: "#9e9e9e",
      border: "1px solid  #9e9e9e",
    },
  },
  checkedIcon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    border: "1px solid  rgba(0,0,0,0)",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: checkMark,
    "input:disabled ~ &": {
      backgroundImage: checkMark,
      background: "#9e9e9e",
      border: "1px solid  #9e9e9e",
    },
  },
}));

const StyledCheckbox = ({ checked, ...rest }) => {
  const classes = useStyles();
  return (
    
    <Checkbox
      disableRipple
      className={classes.root}
      icon={<span className={classes.icon} />}
      checkedIcon={
        <span className={checked ? classes.checkedIcon : classes.icon} />
      }
      {...rest}
    />
  );
};

StyledCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

StyledCheckbox.defaultProps = {
  checked: false,
  onChange: null,
  disabled: true,
};

export default StyledCheckbox;
