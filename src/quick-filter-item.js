import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  default: {
    borderRadius: "36px",
    border: "1px solid",
    orderColor: theme.palette.primary.main,
  },
  active: {
    borderRadius: "36px",
    border: "hidden",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const QuickFilterItem = ({ category, filterOnClick }) => {
  const classes = useStyles();
  const { label, isActive } = category;
  console.log(label, isActive);
  return (
    <Button
      variant="outlined"
      data-selected={isActive}
      className={!isActive ? classes.default : classes.active}
      onClick={() => filterOnClick(label)}
    >
      {label}
    </Button>
  );
};

QuickFilterItem.propTypes = {
    category: PropTypes.object,
    filterOnClick: PropTypes.function,
  }
  
QuickFilterItem.defaultProps = {
    label: 'Untitled',
    isActive: false,
  }

export default QuickFilterItem;

