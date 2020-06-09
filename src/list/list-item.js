import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Grid, Collapse, Avatar, IconButton, LinearProgress} from '@material-ui/core';
import {ExpandLess, ExpandMore, FiberManualRecord} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px'
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

const DefaultListItem = ({itemSecondaryAction, onClick, selected, button, focusSelect, avatar, avatarVariant='circular', avatarSize, avatarColor, heading, details, expand, expansionDetails, timeStatus, progressBar, ...props}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const showDetails = () => {
    setOpen(!open)
  }

  const itemHeading = (heading, progressBar) => {
    return (
      <Grid container alignItems='center' spacing={1}>
        <Grid item xs={progressBar ? 2.5 : 12} >
          {heading}
        </Grid>
        {progressBar && 
          <Grid item xs={6} >
            <LinearProgress value={progressBar} variant='determinate' className={classes.linearProgressBar}/>
          </Grid>}
      </Grid>
    )
  }

  return (
    <>
    <ListItem style={{backgroundColor: open && '#f5f5f5'}} onClick={onClick} selected={selected} button={button} disableGutters disableRipple className={selected ? classes.root : focusSelect ? classes.notSelected : classes.root }>
      {avatar && 
        <ListItemAvatar>
        <Avatar variant={avatarVariant} className={classes[avatarSize]} style={{backgroundColor: avatarColor}}>
          {avatar}
        </Avatar>
      </ListItemAvatar>
      }
      <ListItemText
        primary={itemHeading(heading, progressBar)}
        secondary={details}
      />
      {itemSecondaryAction && <ListItemSecondaryAction>{itemSecondaryAction}</ListItemSecondaryAction>}
      <Grid container xs={2} >
        <Grid item container justify='flex-end' xs={12}>
          {timeStatus ? <div><FiberManualRecord className={classes.complete} />&nbsp;&nbsp;{timeStatus} ago</div> : null}
        </Grid>
        <Grid item container justify='flex-end' xs={12} >
          {expand ? open ? <IconButton disableFocusRipple disableRipple onClick={showDetails}><ExpandLess /></IconButton> : <IconButton disableFocusRipple disableRipple onClick={showDetails}><ExpandMore /></IconButton> : null}
        </Grid>
      </Grid>
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit  style={{backgroundColor: '#f5f5f5'}}>
      <ListItem>
        {expansionDetails}
      </ListItem>
    </Collapse>
    </>
  )
}

export default DefaultListItem

