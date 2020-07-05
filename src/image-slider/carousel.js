import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import DefaultCard from "./cards/default-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
