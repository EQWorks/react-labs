import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'


const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 32px)',
    width: '100%',
    maxWidth: '200px',
    borderRight: `1px solid ${theme.palette.secondary[100]}`,

    listItem: {
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
    '& div > ul > a': {
      borderRadius: theme.spacing(1),
    },
  },
}))

const VerticalNavbar = ({ navItems, pathname }) => {
  const theme = useTheme()
  const classes = useStyles()
  console.log(pathname)
  const getActiveColor = isActive => {
    return isActive ? theme.palette.primary[700] : theme.palette.secondary[500]
  }

  const getActiveBgColor = isActive => {
    return isActive ? '#0075FF10' : 'none'
  }

  return (
    <div className='root'>
      <List>
        {navItems.map(({ name, icon, link }, index) => {
          const status = link === pathname
          return (
            <ListItem className={classes.listItem} key={index} button style={{ backgroundColor: getActiveBgColor(status) }}>
              <ListItemIcon className={classes.listItemIcon} style={{ color: getActiveColor(status) }}>
                {icon}
              </ListItemIcon>
              <ListItemText style={{ color: getActiveColor(status) }} primary={name} />
            </ListItem>
          )
        },
        )}
      </List>
    </div>
  )
}
VerticalNavbar.propTypes = {
  navItems: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default VerticalNavbar
