import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
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
import { data3 } from "../../stories/data/cardInfo";
import DynamicButton from "../dynamic-button";
import { typography } from "@storybook/theming";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";

const Carousel = ({ carouselContent, getRef }) => {
  const { imagesToShow, content } = carouselContent;
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: imagesToShow,
    slidesToScroll: imagesToShow,
  };

  return (
    <div>
      <Slider {...settings} ref={getRef}>
        {content}
      </Slider>
    </div>
  );
};
Carousel.PropTypes = {
  carouselContent: PropTypes.object,
}

Carousel.defaultProps = {
  carouselContent: {
    imagesToShow: 3,
    content: [],
  },
}

export default Carousel;
