import React, { useRef } from 'react'

import TopSection from './top-section'
import Carousel from './carousel'

const ImageSlider = ({ carouselContent, topSectionContent }) => {
  const customSlider = useRef()
  return (
    <React.Fragment>
      <TopSection
        customSlider={customSlider}
        topSectionContent={topSectionContent}
      />
      <Carousel getRef={customSlider} carouselContent={carouselContent} />
    </React.Fragment>
  )
}

ImageSlider.propTypes = {
  ...TopSection.propTypes,
  ...Carousel.propTypes
}

ImageSlider.defaultProps = {
  ...TopSection.defaultProps,
  ...Carousel.defaultProps
}

export default ImageSlider
