import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUICard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'


const useStyles = makeStyles({
  root: {
    minWidth: '40%',
    padding: '5px',
  },
})

const Card = ({ cardContent, cardAction }) => {
  const classes = useStyles()
  return (
    <MUICard className={classes.root}>
      <CardContent>
        {cardContent}
      </CardContent>
      <CardActions>{cardAction}</CardActions>
    </MUICard>
  )
}

Card.propTypes = {
  cardContent: PropTypes.any.isRequired,
  cardAction: PropTypes.any,
}

Card.defaultProps = {
  cardAction: null,
}

export default Card
