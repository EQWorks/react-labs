import React, { useState, useRef } from "react";
import StyledCardContainer from "../src/styled-card-container";
import {
  Avatar,
  Chip,
  CardContent,
  Grid,
  Link,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { data3 } from "../stories/data/cardInfo";
import DynamicButton from "./dynamic-button";
import { typography } from "@storybook/theming";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

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

const Carousel = () => {
  const classes = useStyles();
  const customSlider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };


  const gotoPrev = () => {
    customSlider.current.slickPrev()
  }

  const gotoNext = () => {
    customSlider.current.slickNext()
  }

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
          onClick={() => gotoPrev()}
        >
          <ArrowBackIosRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton
          classes={{ root: classes.sliderControl }}
          onClick={() => gotoNext()}
        >
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );

  const contents = ({ name, description, type, price, category }) => (
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

  return (
    <div>
      {topSection}
      <Slider {...settings} className={classes.slider} ref={customSlider}>
        {data3.map((cardInfo, i) => (
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
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
