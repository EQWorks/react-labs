import React, {useState} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

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


const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
  },
  backgroundColor: {
    backgroundColor: '#f5f5f5'
  },
  iconButton: {
    paddingLeft: '0px',
    paddingRight: '5px',
    '&:hover': {
      backgroundColor: 'inherit',
    }
  },
  listItemAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemAvatarRightPadding: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '7px',
  },
  notSelected: {
    padding: '10px',
    opacity: 0.6
  },
  1: {
    border: '1px solid lightgrey',
    marginBottom: theme.spacing(1),
  },
  2: {
    border: '1px solid lightgrey',
    marginBottom: theme.spacing(2),
  },
  3: {
    border: '1px solid lightgrey',
    marginBottom: theme.spacing(3),
  },
  4: {
    border: '1px solid lightgrey',
    marginBottom: theme.spacing(4),
  },
  5: {
    border: '1px solid lightgrey',
    marginBottom: theme.spacing(5),
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
  sm: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
  md: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  lg: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
  },
}));

// expand - (Default: false, Specify: ['start', 'end'], If True: ['start'])
// spacing - space between each list item (1 - 5)
const ListItem = ({
  expand,
  spacing,
  avatar,
  avatarVariant,
  avatarSize,
  avatarBgColor,
  button,
  focusOnSelected,
  onClick,
  ///////////////////
  itemSecondaryAction,
  selected,
  heading,
  details,
  expansionDetails,
  timeStatus,
  progressBar,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const showDetails = () => setOpen(!open)
  const buttonProps = button && { disableRipple: true }

  const listItemAvatarRootClass = () => {
    const applyPadding = expand && expand !== 'end'
    if (applyPadding) return classes.listItemAvatarRightPadding
    return classes.listItemAvatar
  }

  const itemHeading = (heading, progressBar) => {
    return (
      <Grid container alignItems='center' justify='center' spacing={1}>
        {progressBar > 0 &&
          <Grid item xs={12} >
            <LinearProgress value={progressBar} variant='determinate' className={classes.linearProgressBar}/>
          </Grid>}
        <Grid item xs={12} >{heading}</Grid>
      </Grid>
    )
  }

  const renderIconButton = () => {
    if (!expand) return null
    return (
      <IconButton disableFocusRipple disableRipple onClick={showDetails} classes={{ root: classes.iconButton }}>
        {open ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
    )
  }

  const renderAvatar = () => {
    if (!avatar) return null
    return (
      <ListItemAvatar classes={{ root: listItemAvatarRootClass() }}>
        <>
          {expand !== 'end' && renderIconButton()}
          <Avatar
            variant={ avatarVariant }
            className={ classes[avatarSize] }
            style={{ backgroundColor: avatarBgColor }}
          >
            {avatar}
          </Avatar>
        </>
      </ListItemAvatar>
    )
  }

  return (
    <div className={clsx({ [classes[spacing]]: spacing })}>
      <MUIListItem
        onClick={onClick}
        selected={selected}
        button={button}
        {...buttonProps}
        disableGutters
        className={clsx({
          [classes.root]: true,
          [classes.notSelected]: focusOnSelected && !selected,
          [classes.backgroundColor]: open,
        })}
      >
        {!avatar && expand !=='end' && renderIconButton()}
        {renderAvatar()}
        <ListItemText
          primary={itemHeading(heading, progressBar)}
          secondary={details}
        />
        <Grid item container xs={2} >
          <Grid item container justify='flex-end' xs={12}>
            {timeStatus ? <div><FiberManualRecord className={classes.complete} />&nbsp;&nbsp;{timeStatus} ago</div> : null}
          </Grid>
          {expand === 'end' &&
            <Grid item container justify='flex-end' xs={12} >
              {renderIconButton()}
            </Grid>}
        </Grid>
        {itemSecondaryAction && <ListItemSecondaryAction>{itemSecondaryAction}</ListItemSecondaryAction>}
      </MUIListItem>
      <Collapse in={open} timeout="auto" unmountOnExit  style={{backgroundColor: '#f5f5f5'}}>
        <MUIListItem>
          {expansionDetails}
        </MUIListItem>
      </Collapse>
    </div>
  )
}

ListItem.propTypes = {
  expand: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  spacing: PropTypes.number,
  avatar: PropTypes.any,
  avatarVariant: PropTypes.string,
  avatarSize: PropTypes.string,
  avatarBgColor: PropTypes.string,
  focusOnSelected: PropTypes.bool,
  onClick: PropTypes.func,
  /////////////////////////////////
  selected: PropTypes.bool,
  button: PropTypes.bool,
  heading: PropTypes.string,
  details: PropTypes.any,
  expansionDetails: PropTypes.any,
  timeStatus: PropTypes.string,
  progressBar: PropTypes.number,
  itemSecondaryAction: PropTypes.any,
}

ListItem.defaultProps = {
  onClick: () => null,
  avatar: '',
  avatarVariant: 'circle',
  avatarSize: 'medium',
  avatarBgColor: '',
  expand: false,
  spacing: 0,
  focusOnSelected: false,
}

export default ListItem
