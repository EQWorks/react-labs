import React, { Fragment } from "react";
import StyledCardContainer from "../src/styled-card-container";
import {
  Chip,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardActions,
} from "@material-ui/core";
import image from "../src/assets/footwear.jpeg";
import data from "./data/cardInfo";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "240px",
  },
  tag: {
    display: "flex",
    justifyContent: "flex-end",
  },
  chip: {
    borderRadius: "4px",
    margin: theme.spacing(0.5),
  },
}));

export default {
  component: StyledCardContainer,
  title: "StyledCardContainer",
};

export const WithImage = () => {
  const classes = useStyles();

  const contents = ({ name, description, type, price, category }) => {
    return (
      <React.Fragment>
        <Grid item>
          <Grid item className={classes.tag}>
            <Chip className={classes.chip} size="small" label={type} />
            <Chip className={classes.chip} size="small" label={category} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item className={classes.header}>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h6">{price}/mo</Typography>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <Grid container spacing={2}>
      {data.map((cardInfo, i) => (
        <Grid key={i} item xs={4}>
          <StyledCardContainer
            pattern={{
              style: 3,
              image: cardInfo.image,
            }}
            clickable
          >
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};
