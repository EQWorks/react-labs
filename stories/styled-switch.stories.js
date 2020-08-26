import React from 'react'
import { FormControlLabel } from '@material-ui/core'

import { StyledSwitch } from '../src/index'

export default {
  title: 'Inputs/StyledSwitch',
  component: StyledSwitch,
  args: {
    control: <StyledSwitch />,
    label: 'Switch',
    value: 'firstItem',
  },
  argTypes: {
    control: {
      control: null,
      description: 'The switch component.',
      table: {
        type: { summary: 'node' },
        defaultValue: { summary: '<StyledSwitch />' },
      },
      type: 'node',
    },
    label: {
      description: 'The display label of the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
      type: 'string',
    },
    value: {
      description: 'The value of the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      type: 'string',
    },
  },
}

const Template = (args) => <FormControlLabel {...args} />

export const Default = Template.bind({})
