import React, {useState} from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import MUIList from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'

import ListItem from './list-item'


const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '3px',
  },
  border: {
    border: '1px solid lightgrey',
  },
}))

const List = ({
  divider,
  border,
  spacing,
  //////////
  width,
  onItemClick,
  button,
  focusSelect,
  data,
}) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(button && focusSelect ? 0 : false)

  const inputStyles = { width }

  // move selected with data to parent level
  return (
    <MUIList 
      className={clsx({[classes.root]: true, [classes.border]: border })} 
      style={{ ...inputStyles }} 
      disablePadding
    >
      {data.map((datum, i) => (
        <div key={i}>
          <ListItem
            itemSecondaryAction={data.secondaryAction}
            onClick={() => {if (button) {setSelected(i)} return onItemClick(data, i)}}
            button={button}
            selected={selected === i}
            focusSelect={focusSelect}
            spacing={spacing}
            {...datum}
          />
          {divider && !spacing && <Divider />}
        </div>
      ))}
    </MUIList>
  )
}

List.propTypes = {
  divider: PropTypes.bool,
  border: PropTypes.bool,
  spacing: PropTypes.number,
  data: PropTypes.array,
  /////////////////////////
  width: PropTypes.string,
  onItemClick: PropTypes.func,
  button: PropTypes.bool,
  focusSelect: PropTypes.bool,
}

List.defaultProps = {
  onItemClick: () => null,
  divider: false,
  border: false,
  spacing: 0,
  data: [],
  ////////////////////
  width: '500px',
}

export default List