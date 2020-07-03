import React from "react";
import StyledCardContainer from "../src/styled-card-container";
import {
  Avatar,
  Chip,
  CardContent,
  Grid,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { data3 } from "../stories/data/cardInfo";
import DynamicButton from "./dynamic-button";
import { typography } from "@storybook/theming";

const useStyles = makeStyles((theme) => ({
  textarea: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  wrapper: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  link: {
    display: "flex",
    alignItems: "flex-end",
  },
  container: {
    marginRight: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "240px",
    width: "400px",
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

const Carousel = () => {
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
    <div>
      <Grid container className={classes.textarea}>
        <Grid item>
          <Typography variant="subtitle1">Bundles</Typography>
          <Typography variant="body1">
            Bundles are the collection of segments and layers packaged based on
            a specific persona.
          </Typography>
        </Grid>
        <Grid item className={classes.link}>
          <Link
            href="#"
            variant="body1"
            color="primary"
          >
            View all
          </Link>
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        {data3.map((cardInfo, i) => (
          <Grid key={i} className={classes.container}>
            <StyledCardContainer
              pattern={{
                style: 3,
                image: cardInfo.image,
              }}
            >
              <CardContent className={classes.content}>
                {contents(cardInfo)}
              </CardContent>
            </StyledCardContainer>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
