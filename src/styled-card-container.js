import React, { useRef, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    style1: {
      boxSizing: 'border-box',
      height: '100%',
      width: '100%',
      backgroundImage: '#fff',
      border: `1px solid ${theme.palette.grey[400]}`,
      boxShadow: theme.shadows[1],
      borderRadius: '10px',
      '&:hover': {
        transition: 'all .3s',
        border: `1px solid ${theme.palette.grey[500]}`,
        boxShadow: theme.shadows[2],
      },
      '&.selected': {
        transition: 'all .3s',
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[3],
        '&:hover': {
          transition: 'all .3s',
          border: `1px solid ${theme.palette.primary[800]}`,
          boxShadow: theme.shadows[4],
        },
      },
    },
    style2: {
      boxSizing: 'border-box',
      height: '100%',
      width: '100%',
      backgroundImage: `linear-gradient(#fff, ${theme.palette.grey[100]})`,
      border: `1px solid ${theme.palette.grey[400]}`,
      boxShadow: theme.shadows[1],
      borderRadius: '10px',
      '&:hover': {
        transition: 'all .3s',
        border: `1px solid ${theme.palette.grey[500]}`,
        boxShadow: theme.shadows[2],
      },
      '&.selected': {
        transition: 'all .3s',
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[3],
        '&:hover': {
          transition: 'all .3s',
          border: `1px solid ${theme.palette.primary[800]}`,
          boxShadow: theme.shadows[4],
        },
      },
    },
    style3: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      backgroundImage: ({ pattern }) =>
        `linear-gradient(${fade(theme.palette.grey[600], 0)}, #000), url(${pattern.image
        })`,
      backgroundPosition: 'center center',
      backgroundSize: ({ backgroundKey }) => backgroundKey ? 'auto 100%' : '100% auto',
      transition: 'background-size 0.6s ease-out',
      color: 'white',
      boxShadow: theme.shadows[1],
      borderRadius: '10px',
      '&:hover': {
        transition: 'all .6s',
        boxShadow: theme.shadows[3],
        backgroundSize: ({ backgroundKey }) => backgroundKey ? 'auto 105%' : '105% auto',
      },
    },
  }
})

const StyledCardContainer = ({ pattern, onClick, selected, children, ...rest }) => {
  const [backroundKey, setBackgroundKey] = useState(null)
  const ref = useRef(0)
  
  useLayoutEffect(() => {
    const img = new Image();
    img.src = pattern.image;  
    
    const { clientWidth, clientHeight } = ref.current
    const containerRatio = clientWidth / clientHeight
    
    const { width, height } = img;
    const imageRatio = width/height;
    debugger;

    if(containerRatio > 1 && imageRatio > 1) {
      setBackgroundKey(true);
    }

    else if(containerRatio > 1 && imageRatio < 1) {
      setBackgroundKey(true);
    }

    else if(containerRatio < 1 && imageRatio > 1) {
      setBackgroundKey(false);
    }

    else if(containerRatio < 1 && imageRatio < 1) {
      setBackgroundKey(false);
    }

  }, [ref])
  
  
  const whichStyle = `style${pattern.style}`
  const classes = useStyles({ pattern, backroundKey })


  return (
    <Card
      className={clsx(classes[whichStyle], { selected })}
      elevation={0}
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </Card>
  )
}

StyledCardContainer.propTypes = {
  /**
    * If `true`, the card is selected.
  */
  checked: PropTypes.bool,
  /**
    * The children of the component.
  */
  children: PropTypes.node,
  /**
    * The function executed on card select.
  */
  onClick: PropTypes.func,
  /**
    * The styling pattern of the component.
  */
  pattern: PropTypes.object,
  /**
    * The selected card item.
  */
  selected: PropTypes.bool,
}

StyledCardContainer.defaultProps = {
  checked: false,
  children: {},
  onClick: null,
  pattern: {
    style: 1,
    backgroundImage: 'none',
  },
  selected: false,
}

export default StyledCardContainer
