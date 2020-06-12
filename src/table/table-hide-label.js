import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'


const TableHideLabel = ({ onHide }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <IconButton
      size='small'
      aria-label='hide'
      onClick={onHide}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
    >
      <VisibilityOffIcon color={hovered ? 'inherit' : 'disabled'} />
    </IconButton>
  )
}

TableHideLabel.propTypes = {
  onHide: PropTypes.func,
}
TableHideLabel.defaultProps = {
  onHide: null,
}

export default TableHideLabel
