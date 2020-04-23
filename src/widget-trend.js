import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%'
  },
  title: {
    padding: '8px'
  }
}))

const WidgetTrend = ({title, value, percentage}) => {

  const classes = useStyles()
  const updown = percentage > 0 ? true : false

  return (
    <Paper className={classes.paper} variant='outlined'>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>{title}</Typography>
      <Typography variant='h5' gutterBottom>{value}</Typography>
      <Typography variant='body1'>
        {updown ? <TrendingUpRoundedIcon style={{ color: 'red' }}/>
          : <TrendingDownRoundedIcon style={{ color: 'green' }} />}
        {percentage}
        {updown ? '% increase from yesterday'
          : '% decrease from yesterday'}
      </Typography>
    </Paper>
  )
}

WidgetTrend.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  percentage: PropTypes.number
}

WidgetTrend.defaultProps = {
  title: 'Untitled',
  value: 'N/A',
  percentage: 'N/A'
}

export default WidgetTrend
