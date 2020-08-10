import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import { Link, Grid, Typography, IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    sliderControl: {
      padding: '0px',
      marginLeft: theme.spacing(2)
    },
    textarea: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1)
    },
    link: {
      display: 'flex',
      alignItems: 'flex-end',
      paddingRight: theme.spacing(2)
    }
  }
})

const TopSection = ({ topSectionContent, customSlider }) => {
  const classes = useStyles()
  const { title, paragraph, button } = topSectionContent
  return (
    <Grid container className={classes.textarea}>
      <Grid item>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body1" gutterBottom>
          {paragraph}
        </Typography>
      </Grid>
      <Grid item className={classes.link}>
        <Link href={typeof button === 'object' ? button.linkTo : '#'}>
          {typeof button === 'object' ? button.text : button}
        </Link>
        <IconButton
          classes={{ root: classes.sliderControl }}
          onClick={() => customSlider.current.slickPrev()}
        >
          <ArrowBackIosRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton
          classes={{ root: classes.sliderControl }}
          onClick={() => customSlider.current.slickNext()}
        >
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

TopSection.propTypes = {
  topSectionContent: PropTypes.object,
  customSlider: PropTypes.func
}

TopSection.defaultProps = {
  topSectionContent: {
    title: 'Title',
    paragraph: 'Paragraph',
    button: {
      text: 'Link',
      linkTo: 'https://console.locus.place'
    }
  },
  customSlider: null
}

export default TopSection
