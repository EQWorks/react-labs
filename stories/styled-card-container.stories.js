/* eslint react/prop-types: 0 */
import React, { useState } from 'react'
import {
  Avatar,
  CardContent,
  Grid,
  makeStyles,
} from '@material-ui/core'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import { Chip, Typography } from '@eqworks/lumen-ui'

import { StyledCardContainer } from '../src'
import { subsData, bundlesData, categoriesData } from './data/card-info'


const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '150px',
  },
  sub: {
    color: theme.palette.grey[600],
  },
}))

const useStyles2 = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '240px',
  },
  tag: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  chip: {
    borderRadius: '4px',
    margin: theme.spacing(0.5),
  },
}))

const useStyles3 = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '150px',
    padding: theme.spacing(2),
  },
}))

const useStyles4 = makeStyles((theme) => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: theme.spacing(1),
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      //height: '200px',
    },
    iconDefault: {
      color: '#9e9e9e',
    },
    iconSelected: {
      color: '#0075FF',
    },
    avatar: {
      width: '96px',
      height: '96px',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    category: {
      marginBottom: theme.spacing(3),
    },
  }
})

export default {
  title: 'Data Display/StyledCardContainer',
  component: StyledCardContainer,
}

const Template = () => {
  const classes = useStyles()

  const contents = ({ title, main, sub }) => {
    return (
      <React.Fragment>
        <Grid item className={classes.header}>
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
        <Typography variant="h3">{main}</Typography>
        <Typography variant="body1" className={classes.sub}>
          {sub}
        </Typography>
      </React.Fragment>
    )
  }

  return (
    <Grid container spacing={2}>
      {subsData.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <StyledCardContainer>
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export const Default = Template.bind({})

Default.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateSelectStyles = () => {
  const classes = useStyles()

  const contents = ({ title, main, sub }) => {
    return (
      <React.Fragment>
        <Grid item className={classes.header}>
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
        <Typography variant="h3">{main}</Typography>
        <Typography variant="body1" className={classes.sub}>
          {sub}
        </Typography>
      </React.Fragment>
    )
  }

  return (
    <Grid container spacing={2}>
      {subsData.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <StyledCardContainer
            pattern={{
              style: 2,
            }}
          >
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export const SelectStyles = TemplateSelectStyles.bind({})

SelectStyles.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateWithImage = () => {
  const classes = useStyles2()

  const contents = ({ name, description, type, price, category }) => {
    return (
      <React.Fragment>
        <Grid item>
          <Grid item className={classes.tag}>
            <Chip className={classes.chip} size="small" label={type} />
            <Chip className={classes.chip} size="small" label={category} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item className={classes.header}>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h6">{price}/mo</Typography>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Grid container spacing={2}>
      {bundlesData.map((cardInfo, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <StyledCardContainer
            pattern={{
              style: 3,
              image: cardInfo.image,
            }}
          >
            <CardContent className={classes.content}>
              {contents(cardInfo)}
            </CardContent>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export const WithImage = TemplateWithImage.bind({})

WithImage.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateClickable = () => {
  const classes = useStyles3()

  const content = (
    <React.Fragment>
      <Grid item className={classes.header}>
        <Typography variant="subtitle1">American Motors</Typography>
        <Chip size="small" label="Layer" />
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Propensity of American Motors vehicle brand in the FSA
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">$500/mo</Typography>
      </Grid>
    </React.Fragment>
  )
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <StyledCardContainer onClick={() => alert('clicked')}>
          <CardContent className={classes.content}>{content}</CardContent>
        </StyledCardContainer>
      </Grid>
    </Grid>
  )
}

export const Clickable = TemplateClickable.bind({})

Clickable.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateSelectable = () => {
  const classes = useStyles4()
  const [filterableData, setFilterableData] = useState(
    categoriesData.map((data, index) => ({
      ...data,
      selected: true,
      key: index,
    })),
  )
  const CardOnToggle = (key) => {
    const newData = filterableData.map((data) =>
      data.key === key ? { ...data, selected: !data.selected } : data,
    )
    setFilterableData(newData)
  }
  return (
    <Grid container spacing={2}>
      {filterableData.map((cardInfo, index) => (
        <Grid key={index} item xs={12} sm={4} md={2}>
          <StyledCardContainer
            key={index}
            selected={cardInfo.selected}
            onClick={() => CardOnToggle(index)}
            pattern={{
              style: 1,
            }}
          >
            <Grid item className={classes.header}>
              <CheckCircleOutlineRoundedIcon
                className={
                  cardInfo.selected ? classes.iconSelected : classes.iconDefault
                }
              />
            </Grid>
            <Grid item className={classes.content}>
              <Avatar
                alt="item"
                src={cardInfo.image}
                className={classes.avatar}
              ></Avatar>
              <Typography variant="body1" className={classes.category}>
                {cardInfo.category}
              </Typography>
            </Grid>
          </StyledCardContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export const Selectable = TemplateSelectable.bind({})

Selectable.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===
