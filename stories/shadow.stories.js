import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    '& *': {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: '5rem',
      justifyContent: 'center',
    },
  },
}))

export default {
  title: 'System/Shadow',
  component: Box,
  args: {
    boxShadow: 1,
    text: 'Shadow',
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
    text: {
      description: 'Demonstration text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      type: 'string',
    },
  },
}

const Template = (args) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Box {...args}><Typography variant='body1'>{args.text}</Typography></Box>
    </div>
  )
}

export const Default = Template.bind({})
