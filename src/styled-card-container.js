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
      height: '100%',
      width: '100%',
      backgroundImage: ({ pattern }) =>
        `linear-gradient(${fade(theme.palette.grey[600], 0)}, #000), url(${pattern.image
        })`,
      backgroundPosition: 'center center',
      backgroundSize: ({ ratio }) => ratio ? '100% auto' : 'auto 100%',
      transition: 'background-size 0.6s ease-out',
      color: 'white',
      boxShadow: theme.shadows[1],
      borderRadius: '10px',
      '&:hover': {
        transition: 'all .6s',
        boxShadow: theme.shadows[3],
        backgroundSize: ({ ratio }) => ratio ? '105% auto' : 'auto 105% ',
      },
    },
  }
})

const StyledCardContainer = ({ pattern, onClick, selected, children, ...rest }) => {
  const [ratio, setRatio] = useState(0)
  const ref = useRef(0)
  useLayoutEffect(() => {
    const { clientWidth, clientHeight } = ref.current
    const img = new Image()
    img.src = pattern.image
    const { width: imgWidth, height: imgHeight } = img
    const width = clientWidth/imgWidth
    const height = clientHeight/imgHeight
    setRatio(width >= height)
  }, [ref])
  const whichStyle = `style${pattern.style}`
  const classes = useStyles({ pattern, ratio })

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
