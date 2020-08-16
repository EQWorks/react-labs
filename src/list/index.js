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
      borderRadius: '4px',
    },
    border: {
      border: `1px solid ${theme.palette.secondary[300]}`,
    },
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
  data,
}) => {
  const classes = useStyles()
  const dimensions = { width }
  const [selected, setSelected] = useState(
    button && focusOnSelected ? 0 : false,
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
  /**
    * Toggle a border around the component.
  */
  border: PropTypes.bool,
  /**
    * Toggle the list items of the component to be selectable.
  */
  button: PropTypes.bool,
  /**
    * The content of the component.
  */
  data: PropTypes.array.isRequired,
  /**
    * Toggle a divider between each list item of the component.
  */
  divider: PropTypes.bool,
  /**
    * Toggle styling based on selected list item. Should be paired with `button={true}`.
  */
  focusOnSelected: PropTypes.bool,
  /**
    * The function to be executed on list item select.
  */
  onItemClick: PropTypes.func,
  /**
    * The vertical spacing between list items. Border is added to list item when value is not `0`.
  */
  spacing: PropTypes.number.isRequired,
  /**
    * The width of the component.
  */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

List.defaultProps = {
  border: false,
  button: false,
  divider: false,
  focusOnSelected: false,
  onItemClick: () => null,
  spacing: 0,
  width: 600,
}

export default List
