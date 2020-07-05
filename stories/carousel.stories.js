/* eslint react/prop-types: 0 */
import React, { useRef } from "react";
import Carousel from "../src/imageSlider/carousel";
import {
  Avatar,
  Link,
  Chip,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { data, categoriesData, bundlesData } from "./data/cardInfo";
import StyledCardContainer from "../src/styled-card-container";
export default {
  component: Carousel,
  title: "Carousel",
};

const useStyles = makeStyles((theme) => ({
  sliderControl: {
    padding: "0px",
    marginLeft: theme.spacing(2),
  },
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
    paddingRight: theme.spacing(2),
  },
  container: {
    width: "50px",
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

export const CustomCards = () => {
  const customSlider = useRef();
  const classes = useStyles();
  
  const topSection = (
    <Grid container className={classes.textarea}>
      <Grid item>
        <Typography variant="subtitle1">Bundles</Typography>
        <Typography variant="body1">
          Bundles are the collection of segments and layers packaged based on a
          specific persona.
        </Typography>
      </Grid>
      <Grid item className={classes.link}>
        <Link href="#" variant="body1" color="primary">
          View all
        </Link>
        <IconButton
          classes={{ root: classes.sliderControl }}
          onClick={() => customSlider.current.slickPrev()}
        >
          <ArrowBackIosRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton
          classes={{ root: classes.sliderControl }}
          onClick={() => customSlider.current.slickNext()}
        >
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );

  const cards = data3.map(
    ({ name, description, type, price, category, image }, index) => (
      <StyledCardContainer
        pattern={{
          style: 3,
          image: image,
        }}
        key={index}
      >
        <CardContent className={classes.content}>
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
        </CardContent>
      </StyledCardContainer>
    )
  );

  return (
    <div>
      {topSection}
      <Carousel getRef={customSlider} carouselContent={{
        imagesToShow: 3,
        content: cards,
      }}/>
    </div>
  );
};
