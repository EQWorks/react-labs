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
import Chip from '@material-ui/core/Chip'

// import { palette, typography } from '../theme'

const useStyles = makeStyles(theme => ({
  font: {
    fontFamily: theme.typography.fontFamily,
    paddingLeft: theme.spacing(3),
  },
  root: {
    padding: theme.spacing(1.25),
  },
  backgroundColor: {
    backgroundColor: theme.palette.secondary[50]
  },
  iconButton: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(1.5),
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
    paddingRight: theme.spacing(1),
  },
  notSelected: {
    padding: theme.spacing(1.25),
    opacity: 0.6
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
    marginRight: theme.spacing(0.5),
  },
  spacing: num => ({
    border: `1px solid ${theme.palette.secondary[300]}`,
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(num),
  }),
  complete: {
    color: theme.palette.success.main,
    width: theme.spacing(1.4),
    height: theme.spacing(1.4),
  },
  inProgress: {
    color: theme.palette.error.main,
    width: theme.spacing(1.4),
    height: theme.spacing(1.4),
  },
  linearProgressBar: {
    borderRadius: 50,
  },
  chip: {
    borderRadius: '4px !important',
  },
  timeStatus: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '12px',
    marginTop: theme.spacing(0.7),
  }
}))


// const useStyles = makeStyles((t) => {
//   const theme = {
//     ...t,
//     typography: {
//       ...t.typography,
//       ...typography,
//     },
//     palette: {
//       ...t.palette,
//       ...palette,
//     },
//   }
//   return {
//     font: {
//       fontFamily: theme.typography.fontFamily,
//       paddingLeft: theme.spacing(3),
//     },
//     root: {
//       padding: theme.spacing(1.25),
//     },
//     backgroundColor: {
//       backgroundColor: theme.palette.shade.secondary[50]
//     },
//     iconButton: {
//       paddingLeft: theme.spacing(0),
//       paddingRight: theme.spacing(1.5),
//       '&:hover': {
//         backgroundColor: 'inherit',
//       }
//     },
//     listItemAvatar: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     listItemAvatarRightPadding: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingRight: theme.spacing(1),
//     },
//     notSelected: {
//       padding: theme.spacing(1.25),
//       opacity: 0.6
//     },
//     sm: {
//       width: theme.spacing(3.5),
//       height: theme.spacing(3.5),
//     },
//     md: {
//       width: theme.spacing(5),
//       height: theme.spacing(5)
//     },
//     lg: {
//       width: theme.spacing(7),
//       height: theme.spacing(7),
//       marginRight: theme.spacing(0.5),
//     },
//     spacing: num => ({
//       border: `1px solid ${theme.palette.shade.secondary[300]}`,
//       borderRadius: theme.spacing(0.5),
//       marginBottom: theme.spacing(num),
//     }),
//     complete: {
//       color: theme.palette.success.main,
//       width: theme.spacing(1.4),
//       height: theme.spacing(1.4),
//     },
//     inProgress: {
//       color: theme.palette.error.main,
//       width: theme.spacing(1.4),
//       height: theme.spacing(1.4),
//     },
//     linearProgressBar: {
//       borderRadius: 50,
//     },
//     chip: {
//       borderRadius: '4px !important',
//     },
//     timeStatus: {
//       fontFamily: theme.typography.fontFamily,
//       fontSize: '12px',
//       marginTop: theme.spacing(0.7),
//     },
//   }
// })

/**
* Renders <ListItem /> component
* @param props
* @param props.expand - expansion panel (Default: false, Specify: ['start', 'end'], If True: [default 'start'])
*/
const ListItem = ({
  itemSecondaryAction,
  expand,
  expansionDetails,
  spacing,
  avatar,
  avatarVariant,
  avatarSize,
  avatarBgColor,
  button,
  focusOnSelected,
  onClick,
  selected,
  heading,
  details,
  timeStatus,
  progress,
  progressBar,
  chip,
  chipColor,
  chipProps,
}) => {
  const classes = useStyles(spacing)
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
      <Grid container alignItems='center' justify='flex-start' direction='row' spacing={1}>
        <Grid item xs={12}>{heading}</Grid>
        {progressBar > 0 &&
          <Grid item xs={10} >
            <LinearProgress value={progressBar} variant='determinate' className={classes.linearProgressBar}/>
          </Grid>}
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
    <div className={spacing && classes.spacing}>
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
        <Grid item container xs={2}>
          <Grid item container xs={12} justify='flex-start' alignItems='flex-end' direction='column'>
            {chip && <div>
              <Chip
                classes={{ root: classes.chip }}
                style={{ backgroundColor: chipColor }}
                label={chip}
                size='small'
                {...chipProps}
              />
            </div>}
            {timeStatus && <div className={classes.timeStatus}>
              {progress ? <FiberManualRecord
                className={clsx({
                  [classes.complete]: progress === 'complete',
                  [classes.inProgress]: progress === 'incomplete',
                })} /> : null}
                &nbsp;&nbsp;{timeStatus}
            </div>}
          </Grid>
          {expand === 'end' &&
            <Grid item container justify='flex-end' xs={12} >
              {renderIconButton()}
            </Grid>}
        </Grid>
        {itemSecondaryAction && <ListItemSecondaryAction>{itemSecondaryAction}</ListItemSecondaryAction>}
      </MUIListItem>
      <Collapse in={open} timeout="auto" unmountOnExit  className={ classes.backgroundColor }>
        <MUIListItem>
          <div className={classes.font}>{expansionDetails}</div>
        </MUIListItem>
      </Collapse>
    </div>
  )
}

ListItem.propTypes = {
  itemSecondaryAction: PropTypes.any,
  expand: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  expansionDetails: PropTypes.any,
  spacing: PropTypes.number,
  avatar: PropTypes.any,
  avatarVariant: PropTypes.string,
  avatarSize: PropTypes.string,
  avatarBgColor: PropTypes.string,
  focusOnSelected: PropTypes.bool,
  onClick: PropTypes.func,
  heading: PropTypes.string,
  details: PropTypes.any,
  selected: PropTypes.bool,
  button: PropTypes.bool,
  timeStatus: PropTypes.string,
  progress: PropTypes.string,
  progressBar: PropTypes.number,
  chip: PropTypes.string,
  chipColor: PropTypes.string,
  chipProps: PropTypes.object,
}

ListItem.defaultProps = {
  itemSecondaryAction: '',
  onClick: () => null,
  avatar: '',
  avatarVariant: 'circle',
  avatarSize: 'md',
  avatarBgColor: '',
  expand: false,
  expansionDetails: '',
  spacing: 0,
  focusOnSelected: false,
  heading: '',
  details: '',
  selected: false,
  button: false,
  timeStatus: '',
  progress: '',
  progressBar: 0,
  chip: '',
  propColor: '',
  chipProps: {},
}

export default ListItem
