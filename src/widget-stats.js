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
      height: '100%'
    },
    title: {
      padding: '8px'
    }
  }
})

const WidgetStats = ({ title, value, prev, units, children, trendInfo }) => {
  const classes = useStyles()
  const { isTrendPercentage, upIsGreen, comparedTo, up, down } = trendInfo
  const trendColours = upIsGreen ? ['green', 'red'] : ['red', 'green']
  const trend = isTrendPercentage
    ? Math.round(((value - prev) / prev) * 100).toLocaleString()
    : Math.round(value - prev).toLocaleString()

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.title} variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
      >{`${value.toLocaleString()} ${units}`}</Typography>
      {children && <Typography variant="body1">{children}</Typography>}
      {prev && (
        <Typography variant="body1">
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
  title: PropTypes.string,
  value: PropTypes.number,
  prev: PropTypes.number,
  trendInfo: PropTypes.object,
  children: PropTypes.object,
  units: PropTypes.string
}

WidgetStats.defaultProps = {
  title: 'Untitled',
  value: 0,
  prev: null,
  trendInfo: {
    isTrendPercentage: false,
    upIsGreen: true,
    comparedTo: '',
    up: '',
    down: ''
  },
  children: null,
  units: ''
}

export default WidgetStats
