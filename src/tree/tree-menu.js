import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CheckIcon from '@material-ui/icons/Check'


const useStyles = makeStyles((theme) => ({
  list: { minWidth: 150 },
  listLastItem: { minWidth: 150 },
  itemRoot: {
    width: '100%',
    borderRight: '1px solid #F3FAFF',
    borderLeft: '1px solid #F3FAFF',
    borderBottom: '2px solid #F3FAFF',
    '&:hover': { backgroundColor: '#e8f7ff !important' },
  },
  itemSelected: { backgroundColor: '#F3FAFF !important' },
  itemTextSelected: { color: theme.palette.primary.main },
  icon: { padding: 0, '&:hover': { cursor: 'pointer' } },
  iconSelected: { padding: 0, '&:hover': { cursor: 'pointer' }, color: theme.palette.primary.main },
}))

const renderMenu = ({ parentLists = [], menuOptions, ...rest }) => {
  let _children = []
  let MenuIcon = ChevronRightIcon
  const menuList = menuOptions.map((option) => {
    const { id, name, children } = option
    const isSelected = rest.selectedNodes.includes(id)

    if (!children.length) {
      if (isSelected) {
        MenuIcon = CheckIcon
      } else {
        MenuIcon = null
      }
    }
    if (isSelected && children.length) {
      _children = children
    }

    return (
      <ListItem
        key={name}
        button
        selected={isSelected}
        classes={{ root: rest.classes.itemRoot, selected: rest.classes.itemSelected }}
        onClick={() => rest.onMenuChange({ ...option })}
      >
        <ListItemText primary={`${name}`} className={isSelected ? rest.classes.itemTextSelected: null} />
        {MenuIcon && <ListItemSecondaryAction>
          <MenuIcon className={isSelected ? rest.classes.iconSelected : rest.classes.icon} />
        </ListItemSecondaryAction>}
      </ListItem>
    )
  })

  if (_children.length) {
    return renderMenu({ parentLists: [...parentLists, menuList], menuOptions: _children, ...rest })
  }
  return [...parentLists, menuList]
}

const TreeMenu = React.forwardRef(({ menuOptions, onMenuChange, selectedNodes }, ref) => {
  const classes = useStyles()
  const treeMenu = renderMenu({ classes, onMenuChange, menuOptions, selectedNodes })
  return (
    <Grid container justify='space-between'>
      {treeMenu.map((list, i) => {
        const listStyle = (i === treeMenu.length - 1) ? classes.listLastItem : classes.list
        return (<List key={i} ref={ref} disablePadding className={listStyle}>{list}</List>)
      })}
    </Grid>
  )
})

TreeMenu.propTypes = {
  menuOptions: PropTypes.array.isRequired,
  onMenuChange: PropTypes.func.isRequired,
  selectedNodes: PropTypes.array.isRequired,
}
TreeMenu.displayName = 'TreeMenu'

export default TreeMenu
