import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUICard from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// import { palette, typography } from './theme'
import { StyledCardContainer } from '.'

const useStyles = makeStyles(theme => ({
  sm: {
    maxWidth: 200,
    height: 220,
    padding: theme.spacing(1),
    position: 'relative',
  },
  md: {
    maxWidth: 500,
    height: 270,
    padding: theme.spacing(1),
    position: 'relative',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: theme.spacing(1.2),
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
//     sm: {
//       maxWidth: 200,
//       height: 220,
//       padding: theme.spacing(1),
//       position: 'relative',
//     },
//     md: {
//       maxWidth: 500,
//       height: 270,
//       padding: theme.spacing(1),
//       position: 'relative',
//     },
//     actions: {
//       position: 'absolute',
//       bottom: 0,
//       right: 0,
//       left: 0,
//       padding: theme.spacing(1.2),
//     },
//   }
// })

const Card = ({
  cardTitle,
  alignTitle,
  variantTitle,
  cardContent,
  alignContent,
  variantContent,
  cardAction,
  size,
  headerProps,
  actionSide,
  width,
  height,
  styledContainerProps
}) => {
  const classes = useStyles()
  const dimensions = { maxWidth: width, height }
  const alignTxt = (placement) => {
    if (placement === 'start') return 'left'
    if (placement === 'end') return 'right'
    return placement
  }
  const cardBody = (
    <>
      {Object.entries(headerProps).length > 0 && <CardHeader {...headerProps}/>}
      <CardContent>
        <Grid container item xs={12} justify={alignTitle === 'center' ? 'center' : `flex-${alignTitle}`}>
          <Typography variant={variantTitle} component='span' align={alignTxt(alignTitle)}>{cardTitle}</Typography>
        </Grid>
        <Grid container item xs={12} justify={alignContent === 'center' ? 'center' : `flex-${alignContent}`}>
          <Typography variant={variantContent} component='span' align={alignTxt(alignContent)}>{cardContent}</Typography>
        </Grid>
      </CardContent>
      {cardAction && 
      <Grid
        className={classes.actions}
        container
        alignItems='flex-end'
        justify={actionSide === 'center' ? 'center' : `flex-${actionSide}`}
      >
        <CardActions disableSpacing>{cardAction}</CardActions>
      </Grid>}
    </>
  )
  if (Object.entries(styledContainerProps).length > 0) return (
    <StyledCardContainer {...styledContainerProps}>{cardBody}</StyledCardContainer>
  )

  return (
    <MUICard style={dimensions} className={classes[size]}>{cardBody}</MUICard>
  )
}

Card.propTypes = {
  cardContent: PropTypes.any.isRequired,
  cardTitle: PropTypes.string,
  cardAction: PropTypes.any,
  size: PropTypes.string,
  headerProps: PropTypes.object,
  actionSide: PropTypes.string,
  alignContent: PropTypes.string,
  alignTitle: PropTypes.string,
  variantContent: PropTypes.string,
  variantTitle: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  styledContainerProps: PropTypes.object,
}

Card.defaultProps = {
  cardTitle: 'Interesting Title',
  cardAction: null,
  size: 'md',
  headerProps: {},
  actionSide: 'end',
  width: '',
  height: '',
  alignTitle: 'start',
  alignContent: 'start',
  variantTitle: 'h5',
  variantContent: 'body2',
  styledContainerProps: {},
}

export default Card
