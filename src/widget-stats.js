import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: '100%',
    },
    title: {
      padding: '8px',
    },
  }
})

const WidgetStats = ({ title, value, prev, units, children, trendInfo }) => {
  value = value || 0
  prev = prev || null
  const classes = useStyles()
  const { isTrendPercentage, upIsGreen, comparedTo, up, down } = trendInfo
  const trendColours = upIsGreen ? ['green', 'red'] : ['red', 'green']
  const trend = ((isTrendPercentage
    ? Math.round(((value - prev) / prev) * 100)
    : Math.round(value - prev)) || 0).toLocaleString()

  return (
    <Paper className={classes.paper} variant='outlined'>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>
        {title}
      </Typography>
      <Typography
        variant='h5'
        gutterBottom
      >
        {`${value.toLocaleString()} ${units}`}
      </Typography>
      {children && <Typography variant='body1'>{children}</Typography>}
      {prev !== null && (
        <Typography variant='body1'>
          {trend > 0 ? (
            <TrendingUpRoundedIcon
              style={{ paddingRight: '8px', color: trendColours[0] }}
            />
          ) : (
            <TrendingDownRoundedIcon
              style={{ paddingRight: '8px', color: trendColours[1] }}
            />
          )}
          {trend}
          {isTrendPercentage ? '%' : ` ${units}`}
          {trend > 0 ? ` ${up} ` : ` ${down} `}
          {comparedTo}
        </Typography>
      )}
    </Paper>
  )
}

WidgetStats.propTypes = {
  /**
    * The children of the component.
  */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
    * The previous value of the component. Include with `current` to display a 'Trend' style.
  */
  prev: PropTypes.number,
  /**
    * The title of the component.
  */
  title: PropTypes.string,
  /**
    * The details of the trend of value of the component.
  */
  trendInfo: PropTypes.object,
  /**
    * The unit of value of the component.
  */
  units: PropTypes.string,
  /**
    * The current value of the component.
  */
  value: PropTypes.number,
}

WidgetStats.defaultProps = {
  children: null,
  prev: null,
  title: '',
  trendInfo: {
    isTrendPercentage: false,
    upIsGreen: true,
    comparedTo: '',
    up: '',
    down: '',
  },
  units: '',
  value: 0,
}

export default WidgetStats
