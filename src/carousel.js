import React, { useState, useRef } from "react";
import {
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


const Carousel = ({ children, getRef }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings} ref={getRef}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
