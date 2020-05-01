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

const WidgetStats = ({ title, value, prev, isPercentage, children }) => {
  const classes = useStyles()
  const renderTrend = () => {
    if (children) {
      return (
        <Typography variant='body1'>
          {children}
        </Typography>
      )
    }
    if (prev != null) {
      const trend = Math.round(((value - prev) / prev) * 100)
      return (
        <Typography variant='body1'>
          {trend > 0
            ? <TrendingUpRoundedIcon style={{ color: 'red' }}/>
            : <TrendingDownRoundedIcon style={{ color: 'green' }} />
          }
          {trend}%
          {trend > 0 ? ' increase ' : ' decrease '}
          from before
        </Typography>
      )
    }
    return null
  }

  return (
    <Paper className={classes.paper} variant='outlined'>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>{title}</Typography>
      <Typography variant='h5' gutterBottom>{value}{`${isPercentage ? `%` : '' }`}</Typography>
      {renderTrend()}
    </Paper>
  )
}

WidgetStats.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  isPercentage: PropTypes.bool,
  children: PropTypes.object,
}

WidgetStats.defaultProps = {
  title: 'Untitled',
  value: 0,
  prev: null,
  isPercentage: false,
  children: null,
}

export default WidgetStats
