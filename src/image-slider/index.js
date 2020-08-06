import React, { useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import customTheme from "../../src/theme/index";
import TopSection from "./top-section";
import Carousel from "./carousel";

const ImageSlider = ({ carouselContent, topSectionContent }) => {
  const customSlider = useRef();
  return (
    <ThemeProvider theme={customTheme}>
      <React.Fragment>
        <TopSection
          customSlider={customSlider}
          topSectionContent={topSectionContent}
        />
        <Carousel getRef={customSlider} carouselContent={carouselContent} />
      </React.Fragment>
    </ThemeProvider>
  );
};

ImageSlider.propTypes = {
  ...TopSection.propTypes,
  ...Carousel.propTypes,
};

ImageSlider.defaultProps = {
  ...TopSection.defaultProps,
  ...Carousel.defaultProps,
};

export default ImageSlider;
