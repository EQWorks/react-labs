import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    '&:hover': { backgroundColor: '#e8f7ff !important' },
  },
}))

const ListMenu = ({ options, onClick }) => {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      {options.map((option, i) => {
        return (
          <ListItem key={i} dense button className={classes.listItem} onClick={() => onClick(option)}>
            <ListItemText secondary={`${(option.map(({ name }) => name)).join(' › ')}`} />
          </ListItem>
        )
      })}
    </List>
  )
}

ListMenu.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ListMenu
