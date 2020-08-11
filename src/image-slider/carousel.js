import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DefaultCard from "./cards/default-card";
import "../css/carousel.css";

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8];
const Carousel = ({ carouselContent, getRef }) => {
  const { imagesToShow, content } = carouselContent;
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: imagesToShow,
    slidesToScroll: imagesToShow,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: imagesToShow > 1 ? imagesToShow - 1 : 1,
          slidesToScroll: imagesToShow > 1 ? imagesToShow - 1 : 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: imagesToShow > 2 ? imagesToShow - 2 : 1,
          slidesToScroll: imagesToShow > 2 ? imagesToShow - 2 : 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: imagesToShow > 3 ? imagesToShow - 3 : 1,
          slidesToScroll: imagesToShow > 3 ? imagesToShow - 3 : 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} ref={getRef}>
        {content}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  getRef: PropTypes.func,
  carouselContent: PropTypes.object,
};

Carousel.defaultProps = {
  getRef: null,
  carouselContent: {
    imagesToShow: 4,
    content: defaultData.map((d, i) => <DefaultCard key={i} content={d} />),
  },
};

export default Carousel;
