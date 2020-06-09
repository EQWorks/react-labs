import React, {useState} from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUIListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'

import clsx from 'clsx'


const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px'
  },
  backgroundColor: {
    backgroundColor: '#f5f5f5'
  },
  notSelected: {
    padding: '10px',
    opacity: 0.6
  },
  complete: {
    color: 'green',
    width: '12px',
    height: '12px',
  },
  inProgress: {
    color: 'red',
    width: '12px',
    height: '12px',
  },
  linearProgressBar: {
    borderRadius: 50
  },
  small: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ListItem = ({
  itemSecondaryAction,
  onClick,
  selected,
  button,
  focusSelect,
  avatar,
  avatarVariant,
  avatarSize,
  avatarColor,
  heading,
  details,
  expand,
  expansionDetails,
  timeStatus,
  progressBar,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const showDetails = () => setOpen(!open)

  const itemHeading = (heading, progressBar) => {
    return (
      <Grid container alignItems='center' spacing={1}>
        {progressBar &&
          <Grid item xs={12} >
            <LinearProgress value={progressBar} variant='determinate' className={classes.linearProgressBar}/>
          </Grid>}
        <Grid item xs={12} >{ heading }</Grid>
      </Grid>
    )
  }

  const renderIconButton = () => {
    if (!expand) return null
    return (
      <IconButton disableFocusRipple disableRipple onClick={showDetails}>
        {open ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
    )
  }

  const renderAvatar = () => {
    if (!avatar) return null
    return (
      <ListItemAvatar>
        <Avatar variant={avatarVariant} className={classes[avatarSize]} style={{backgroundColor: avatarColor}}>
          {avatar}
        </Avatar>
      </ListItemAvatar>
    )
  }

  return (
    <>
      <MUIListItem
        onClick={onClick}
        selected={selected}
        button={button}
        disableGutters
        className={clsx({
          [classes.root]: true,
          [classes.notSelected]: focusSelect,
          [classes.backgroundColor]: open,
        })}
      >
        {renderAvatar()}
        <ListItemText
          primary={itemHeading(heading, progressBar)}
          secondary={details}
        />
        <Grid item container xs={2} >
          <Grid item container justify='flex-end' xs={12}>
            {timeStatus ? <div><FiberManualRecord className={classes.complete} />&nbsp;&nbsp;{timeStatus} ago</div> : null}
          </Grid>
          <Grid item container justify='flex-end' xs={12} >{renderIconButton()}</Grid>
        </Grid>
        {itemSecondaryAction && <ListItemSecondaryAction>{itemSecondaryAction}</ListItemSecondaryAction>}
      </MUIListItem>
      <Collapse in={open} timeout="auto" unmountOnExit  style={{backgroundColor: '#f5f5f5'}}>
        <MUIListItem>
          {expansionDetails}
        </MUIListItem>
      </Collapse>
    </>
  )
}

ListItem.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  button: PropTypes.bool,
  focusSelect: PropTypes.bool,
  avatar: PropTypes.any,
  avatarVariant: PropTypes.string,
  avatarSize: PropTypes.string,
  avatarColor: PropTypes.string,
  heading: PropTypes.string,
  details: PropTypes.any,
  expand: PropTypes.bool,
  expansionDetails: PropTypes.any,
  timeStatus: PropTypes.string,
  progressBar: PropTypes.number,
  itemSecondaryAction: PropTypes.any,
}

ListItem.defaultProps = {
  avatarVariant: 'circle',
}
export default ListItem

