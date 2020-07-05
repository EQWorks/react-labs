import React, { useRef } from "react";
import TopSection from "./top-section";
import Carousel from "./carousel";
import PropTypes from 'prop-types';

const ImageSlider = ({ carouselContent, topSectionContent }) => {
  const customSlider = useRef();
  return (
    <React.Fragment>
      <TopSection customSlider={customSlider} topSelectionContent={topSectionContent} />
      <Carousel getRef={customSlider} carouselContent={carouselContent}/>
    </React.Fragment>
  );
};

export default ImageSlider;
