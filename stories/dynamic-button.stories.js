import React from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import { DynamicButton } from '../src/index'

export default {
  title: 'Deprecated/DynamicButton',
  component: DynamicButton,
  args: {
    children: 'Call to action',
    load: false,
    type: 'primary',
    noSpacing: false,
  },
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      defaultValue: false,
      description: 'If `true`, the button will be disabled.',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    load: {
      type: 'boolean',
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

const Template = (args) => <DynamicButton {...args}></DynamicButton>

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
