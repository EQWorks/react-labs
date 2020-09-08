import React from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import { Button } from '../src/index'

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'medium',
    type: 'primary',
    noSpacing: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'If `true`, the button will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: {
        options: ['small', 'medium', 'large'],
        type: 'select',
      },
      type: { name: 'select', required: true },
    },
    type: {
      control: {
        options: ['primary', 'secondary', 'tertiary'],
        type: 'select',
      },
      type: { name: 'select', required: true },
    },
  },
}

const Template = (args) => (
  <Button {...args}>
    {args.children}
  </Button>
)

export const Default = Template.bind({})

// ===

export const StartIcon = Template.bind({})

StartIcon.args = {
  startIcon: <CloudUploadIcon />,
}

StartIcon.argTypes = {
  startIcon: {
    control: null,
    description: 'Element placed before the children.',
    table: {
      type: { summary: 'node' },
    },
  },
}

// ===

export const EndIcon = Template.bind({})

EndIcon.args = {
  endIcon: <CloudUploadIcon />,
}

EndIcon.argTypes = {
  endIcon: {
    control: null,
    description: 'Element placed after the children.',
    table: {
      type: { summary: 'node' },
    },
  },
}
