import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import { Button, Typography } from '@eqworks/lumen-ui'

import { bundlesData, categoriesData, layersData } from './data/card-info'
import CategoryCard from './cards/category-card'
import heroImage from './assets/hero.jpg'
import ImageCard from './cards/image-card'
import { ImageSlider } from '../src'


const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  hero: {
    backgroundImage: heroImage,
    height: '420px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },

  section: {
    padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`,
  },
  textarea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: theme.spacing(8),
  },
  textareaItem: {
    paddingBottom: theme.spacing(2),
  },
}))

export default {
  title: 'Data Display/Image Slider',
  component: ImageSlider,
}

const Template = () => <ImageSlider />

export const Default = Template.bind({})

Default.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateBundles = () => {
  const cards = bundlesData.map((prop, i) => <ImageCard key={i} prop={prop} />)
  return (
    <ImageSlider
      topSectionContent={{
        title: 'Bundles',
        paragraph:
          'Bundles are the collection of segments and layers packaged based on a specific persona.',
        button: {
          text: 'View all',
          linkTo: 'https://console.locus.place',
        },
      }}
      carouselContent={{
        imagesToShow: 3,
        content: cards,
      }}
    />
  )
}

export const Bundles = TemplateBundles.bind({})

Bundles.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateCategories = () => {
  const cards = categoriesData.map((prop, i) => (
    <CategoryCard key={i} prop={prop} />
  ))
  return (
    <ImageSlider
      topSectionContent={{
        title: 'Categories',
        paragraph: '',
        button: {
          text: 'Customize my feed',
        },
      }}
      carouselContent={{
        imagesToShow: 6,
        content: cards,
      }}
    />
  )
}

export const Categories = TemplateCategories.bind({})

Categories.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateLayers = () => {
  const cards = layersData.map((prop, i) => <ImageCard key={i} prop={prop} />)
  return (
    <ImageSlider
      topSectionContent={{
        title: 'Layers',
        paragraph:
          'A collection of geospatial data product of selected categories.',
        button: {
          text: 'View all',
        },
      }}
      carouselContent={{
        imagesToShow: 3,
        content: cards,
      }}
    />
  )
}

export const Layers = TemplateLayers.bind({})

Layers.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

const TemplateMultipleSliders = () => {
  const classes = useStyles()
  const theme = useTheme()
  const categoriesCards = categoriesData.map((prop, i) => (
    <CategoryCard key={i} prop={prop} />
  ))
  const bundlesCards = bundlesData.map((prop, i) => (
    <ImageCard key={i} prop={prop} />
  ))
  const layersCards = layersData.map((prop, i) => (
    <ImageCard key={i} prop={prop} />
  ))

  return (
    <Grid container spacing={2}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Button type="secondary">My subscription</Button>
          <Button type="tertiary">Marketplace seller hub</Button>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12}></Grid>
      <Grid container item xs={12}>
        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={6}>
            <img className={classes.hero} src={heroImage} />
          </Grid>
          <Grid item xs={6} className={classes.textarea}>
            <div className={classes.textareaItem}>
              <Typography gutterBottom variant="h4">
                Welcome to Locus marketplace
              </Typography>
              <Typography gutterBottom variant="body1">
                Locus marketplace is where you can subscribe and sell customized
                segments and layers. We have +600 data across various
                industries.
              </Typography>
            </div>
            <div className={classes.textareaItem}>
              <Button type="secondary">Learn more</Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ backgroundColor: `${theme.palette.grey[50]}` }}
      >
        <Grid item xs={12} className={classes.section}>
          <ImageSlider
            style={{ width: '100%' }}
            topSectionContent={{
              title: 'Categories',
              paragraph: '',
              button: {
                text: 'Customize my feed',
              },
            }}
            carouselContent={{
              imagesToShow: 6,
              content: categoriesCards,
            }}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} className={classes.section}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ fontWeight: 400, padding: '32px 0px 32px' }}
          >
            Top picks for you
          </Typography>
          <ImageSlider
            topSectionContent={{
              title: 'Layers',
              paragraph:
                'A collection of geospatial data product of selected categories.',
              button: {
                text: 'View all',
              },
            }}
            carouselContent={{
              imagesToShow: 4,
              content: layersCards,
            }}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} className={classes.section}>
          <ImageSlider
            topSectionContent={{
              title: 'Bundles',
              paragraph:
                'Bundles are the collection of segments and layers packaged based on a specific persona.',
              button: {
                text: 'View all',
              },
            }}
            carouselContent={{
              imagesToShow: 4,
              content: bundlesCards,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export const MultipleSliders = TemplateMultipleSliders.bind({})

MultipleSliders.parameters = {
  controls: { hideNoControlsWarning: true },
}
