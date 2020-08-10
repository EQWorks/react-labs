import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import MUIList from '@material-ui/core/List'

import ListItem from './list-item'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: '4px'
    },
    border: {
      border: `1px solid ${theme.palette.secondary[300]}`
    }
  }
})

const List = ({
  divider,
  border,
  spacing,
  width,
  onItemClick,
  focusOnSelected,
  button,
  data
}) => {
  const classes = useStyles()
  const dimensions = { width }
  const [selected, setSelected] = useState(
    button && focusOnSelected ? 0 : false
  )

  return (
    <MUIList
      className={clsx({ [classes.root]: true, [classes.border]: border })}
      style={dimensions}
      disablePadding
    >
      {data.map((datum, i) => (
        <div key={i}>
          <ListItem
            itemSecondaryAction={data.secondaryAction}
            onClick={() => {
              if (button) {
                setSelected(i)
              }
              return onItemClick(datum, i)
            }}
            button={button}
            selected={selected === i}
            focusOnSelected={focusOnSelected}
            spacing={spacing}
            {...datum}
          />
          {divider && !spacing && i !== data.length - 1 && <Divider />}
        </div>
      ))}
    </MUIList>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  divider: PropTypes.bool,
  border: PropTypes.bool,
  spacing: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  focusOnSelected: PropTypes.bool,
  onItemClick: PropTypes.func,
  button: PropTypes.bool
}

List.defaultProps = {
  onItemClick: () => null,
  divider: false,
  border: false,
  spacing: 0,
  width: 600,
  focusOnSelected: false,
  button: false
}

export default List
