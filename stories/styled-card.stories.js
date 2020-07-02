import React, { Fragment } from "react";
import StyledCard from "../src/styled-card";
import {
  Chip,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default {
  component: StyledCard,
  title: "StyledCard",
};

export const Default = () => {
  const classes = useStyles();

  const content = (
    <React.Fragment>
      <Grid item className={classes.header}>
        <Typography variant="subtitle1">American Motors</Typography>
        <Chip size="small" label="Layer" />
      </Grid>
      <Typography variant="body1">
        Propensity of American Motors vehicle brand in the FSA
      </Typography>
      <Typography variant="h6">$500/mo</Typography>
    </React.Fragment>
  );

  return <StyledCard pattern={1} content={content}/>;
};
