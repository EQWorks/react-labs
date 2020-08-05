import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => {
  return {
    test: {
      color: theme.palette.primary.main,
    },
  };
});

export default {
  component: Chip,
  title: "Chip",
};

export const Default = () => {
  const classes = useStyles();

  return <Chip className={classes.test} label="Basic" />;
};
