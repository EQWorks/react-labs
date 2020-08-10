import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    default: {
      textTransform: "none",
      borderRadius: "36px",
      border: "1px solid",
      orderColor: theme.palette.primary.main,
    },
    active: {
      textTransform: "none",
      borderRadius: "36px",
      border: "hidden",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  };
});

const QuickFilterItem = ({ disabled, category, filterOnClick }) => {
  const classes = useStyles();
  const { label, isActive } = category;
  return (
    <Button
      variant="outlined"
      data-selected={isActive}
      className={!isActive ? classes.default : classes.active}
      disabled={disabled}
      onClick={() => filterOnClick(label)}
    >
      {label}
    </Button>
  );
};

QuickFilterItem.propTypes = {
  category: PropTypes.object,
  filterOnClick: PropTypes.function,
  disabled: PropTypes.bool,
};

QuickFilterItem.defaultProps = {
  category: [
    {
      label: "Data missing",
      isActive: false,
    },
  ],
  filterOnClick: () => {},
  disabled: false,
};

export default QuickFilterItem;
