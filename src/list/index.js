import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, Divider} from '@material-ui/core';
import PropTypes from 'prop-types'

import DefaultListItem from './list-item'


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

const DefaultList = ({
  width,
  onItemClick,
  divider,
  button,
  focusSelect,
  data,
}) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(button && focusSelect ? 0 : false)

  const inputStyles = {
    width: width
  }

  // move selected with data to parent level
  return (
    <List className={classes.root} style={{ ...inputStyles }} disablePadding>
      {data.map((data, i) => (
        <>
          <DefaultListItem
            itemSecondaryAction={data.secondaryAction}
            onClick={() => {if (button) {setSelected(i)} return onItemClick(data, i)}}
            button={button}
            selected={selected === i}
            focusSelect={focusSelect}
            avatar={data.avatar}
            avatarVariant={data.avatarVariant}
            avatarSize={data.avatarSize}
            avatarColor={data.avatarColor}
            heading={data.heading}
            details={data.details}
            expand={data.expand}
            expansionDetails={data.expansionDetails}
            timeStatus={data.timeStatus}
            progressBar={data.progressBar}
          />
          {divider && <Divider />}
        </>
      ))}
    </List>
  );
}

DefaultList.propTypes = {
  width: PropTypes.string,
  onItemClick: PropTypes.func,
  divider: PropTypes.bool,
  button: PropTypes.bool,
  focusSelect: PropTypes.bool,
  data: PropTypes.array,
}

DefaultList.defaultProps = {
  width: '500px',
}

export default DefaultList