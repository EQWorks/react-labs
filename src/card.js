import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUICard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { StyledCardContainer } from '.'

const useStyles = makeStyles((theme) => {
  return {
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
    },
  }
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
  height,
  styledContainerProps,
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
      {Object.entries(headerProps).length > 0 && (
        <CardHeader {...headerProps} />
      )}
      <CardContent>
        <Grid
          container
          item
          xs={12}
          justify={alignTitle === 'center' ? 'center' : `flex-${alignTitle}`}
        >
          <Typography
            variant={variantTitle}
            component="span"
            align={alignTxt(alignTitle)}
          >
            {cardTitle}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify={
            alignContent === 'center' ? 'center' : `flex-${alignContent}`
          }
        >
          <Typography
            variant={variantContent}
            component="span"
            align={alignTxt(alignContent)}
          >
            {cardContent}
          </Typography>
        </Grid>
      </CardContent>
      {cardAction && (
        <Grid
          className={classes.actions}
          container
          alignItems="flex-end"
          justify={actionSide === 'center' ? 'center' : `flex-${actionSide}`}
        >
          <CardActions disableSpacing>{cardAction}</CardActions>
        </Grid>
      )}
    </>
  )
  if (Object.entries(styledContainerProps).length > 0)
    return (
      <StyledCardContainer {...styledContainerProps}>
        {cardBody}
      </StyledCardContainer>
    )

  return (
    <MUICard data-testid='card' style={dimensions} className={classes[size]}>
      {cardBody}
    </MUICard>
  )
}

Card.propTypes = {
  /**
    * The vertical alignment of the action item.
  */
  actionSide: PropTypes.oneOf(['start', 'center', 'end']),
  /**
    * The vertical alignment of the title.
  */
  alignTitle: PropTypes.oneOf(['start', 'center', 'end']),
  /**
    * The vertical alignment of the content.
  */
  alignContent: PropTypes.string,
  /**
    * The action item of the component.
  */
  cardAction: PropTypes.any,
  /**
    * The content of the component.
  */
  cardContent: PropTypes.any.isRequired,
  /**
    * The title of the component.
  */
  cardTitle: PropTypes.string,
  /**
    * The properties of the component header.
  */
  headerProps: PropTypes.object,
  /**
    * The height of the component.
  */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
    * The size of the component.
  */
  size: PropTypes.oneOf(['sm', 'md']),
  /**
    * The properties of the component.
  */
  styledContainerProps: PropTypes.object,
  /**
    * The theme typography styles to the component content.
  */
  variantContent: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
  /**
    * The theme typography styles to the component title.
  */
  variantTitle: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
  /**
    * The width of the component.
  */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Card.defaultProps = {
  actionSide: 'start',
  alignContent: 'start',
  alignTitle: 'start',
  headerProps: {},
  size: 'md',
  styledContainerProps: {},
  variantContent: 'body2',
  variantTitle: 'h5',
}

export default Card
