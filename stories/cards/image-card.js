import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip, CardContent, Grid, Typography } from '@material-ui/core'
import StyledCardContainer from '../../src/styled-card-container'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '240px'
  },
  tag: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  chip: {
    borderRadius: '4px',
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white
  }
}))

/* eslint react/prop-types: 0 */
const ImageCard = ({ prop }) => {
  const { type, category, name, description, price, image } = prop
  const classes = useStyles()
  return (
    <StyledCardContainer
      pattern={{
        style: 3,
        image: image
      }}
    >
      <CardContent className={classes.content}>
        <Grid item>
          <Grid item className={classes.tag}>
            <Chip className={classes.chip} size="small" label={category} />
            <Chip className={classes.chip} size="small" label={type} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item className={classes.header}>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h5" style={{ fontWeight: 400 }}>
            {price}/mo
          </Typography>
        </Grid>
      </CardContent>
    </StyledCardContainer>
  )
}

export default ImageCard
