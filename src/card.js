import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUICard from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  sm: {
    maxWidth: 200,
    height: 220,
    padding: '10px',
    position: 'relative',
  },
  md: {
    maxWidth: 500,
    height: 270,
    padding: '10px',
    position: 'relative',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: '15px',
  },
})

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
  height
}) => {
  const classes = useStyles()
  const dimensions = { maxWidth: width, height }
  return (
    <MUICard style={dimensions} className={classes[size]}>
      {Object.entries(headerProps).length > 0 && <CardHeader {...headerProps}/>}
      <CardContent>
        <Typography variant={variantTitle} component='h2' align={alignTitle}>{cardTitle}</Typography>
        <Typography variant={variantContent} component='p' align={alignContent}>{cardContent}</Typography>
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
    </MUICard>
  )
}

Card.propTypes = {
  cardContent: PropTypes.any.isRequired,
  cardTitle: PropTypes.string,
  cardAction: PropTypes.any,
  size: PropTypes.string,
  headerProps: PropTypes.object,
  actionSide: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alignContent: PropTypes.string,
  alignTitle: PropTypes.string,
  variantContent: PropTypes.string,
  variantTitle: PropTypes.string,
}

Card.defaultProps = {
  cardTitle: '',
  cardAction: null,
  size: 'md',
  headerProps: {},
  actionSide: 'end',
  width: '',
  height: '',
  alignTitle: 'left',
  alignContent: 'left',
  variantTitle: 'h5',
  variantContent: 'body2',
}

export default Card
