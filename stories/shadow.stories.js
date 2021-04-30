import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box, Divider } from '@material-ui/core'
import { Typography } from '@eqworks/lumen-ui'


const useStyles = makeStyles(theme => ({
  container: {
    '& *': {
      margin: theme.spacing(2,0),
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: '5rem',
      justifyContent: 'center',
    },
  },
  divider: {
    margin: theme.spacing(4,0),
  },
}))

export default {
  title: 'Theme/Shadow',
  component: Box,
  args: {
    boxShadow: 1,
  },
  argTypes: {
    boxShadow: {
      control: {
        options: [0, 1, 2, 3, 4],
        type: 'select',
      },
      defaultValue: 0,
      description: 'The relative depth, or distance, between two surfaces along the z-axis.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
  },
}
const shadows = [1,2,3,4]

const Template = (args) => {
  const classes = useStyles()
  const theme = useTheme()
  const shadowLists = shadows.map((shadow, i) => (
    <Box key={i} boxShadow={shadow}><Typography>{`Shadow ${shadow}0`}</Typography></Box>
  ))
  return (
    <>
      <div style={{ margin: theme.spacing(8, 4) }}>
        <Typography variant="h5" marginBottom={2}>
          Shadows
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.container}>
          {shadowLists}
        </div>
      </div>
      <div style={{ margin: theme.spacing(8, 4) }}>
        <Typography variant="h5" marginBottom={2}>
          Playground
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.container}>
          <Box {...args}><Typography variant='body1'>Shadow</Typography></Box>
        </div>
      </div>
    </>
  )
}

export const Default = Template.bind({})
