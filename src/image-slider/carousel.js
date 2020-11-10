import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import DefaultCard from './cards/default-card'

const useStyles = makeStyles(() => {
  return {
    root: {
      '& .slick-slide': {
        boxSizing: 'border-box',
        paddingRight: '16px',
      },
    },
  }
})

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8]
const Carousel = ({ carouselContent, getRef }) => {
  const classes = useStyles()

  const { imagesToShow, content } = carouselContent
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
  }

  return (
    <div>
      <Slider className={classes.root} {...settings} ref={getRef}>
        {content}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  carouselContent: PropTypes.object,
  getRef: PropTypes.func,
}

Carousel.defaultProps = {
  /**
    * The content of the component.
  */
  carouselContent: {
    imagesToShow: 4,
    content: defaultData.map((d, i) => <DefaultCard key={i} content={d} />),
  },
  /**
    * The reference link.
  */
  getRef: null,
}

export default Carousel
