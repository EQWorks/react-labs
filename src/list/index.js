import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MUIList from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'

import ListItem from './list-item'


const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid lightgrey',
    borderRadius: '3px'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const List = ({
  width,
  onItemClick,
  divider,
  button,
  focusSelect,
  data,
}) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(button && focusSelect ? 0 : false)

  const inputStyles = { width }

  // move selected with data to parent level
  return (
    <MUIList className={classes.root} style={{ ...inputStyles }} disablePadding>
      {data.map((data, i) => (
        <div key={i}>
          <ListItem
            itemSecondaryAction={data.secondaryAction}
            onClick={() => {if (button) {setSelected(i)} return onItemClick(data, i)}}
            button={button}
            selected={selected === i}
            focusSelect={focusSelect}
            {...data}
          />
          {divider && <Divider />}
        </div>
      ))}
    </MUIList>
  )
}

List.propTypes = {
  width: PropTypes.string,
  onItemClick: PropTypes.func,
  divider: PropTypes.bool,
  button: PropTypes.bool,
  focusSelect: PropTypes.bool,
  data: PropTypes.array,
}

List.defaultProps = {
  width: '500px',
}

export default List