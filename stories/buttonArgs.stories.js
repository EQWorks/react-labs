import React from 'react'
import { action } from '@storybook/addon-actions'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

import { Button } from '../src/index'

const selectIcon = (icon) => {
  if (icon === 'AccountCircle') {
    return <AccountCircleIcon />
  } else if (icon === 'CloudUpload') {
    return <CloudUploadIcon />
  } else {
    return <VerifiedUserIcon />
  }
}

export default {
  title: 'ButtonArgs',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction.',
      },
    },
  },
  args: {
    size: 'medium',
    text: 'Button',
    type: 'primary',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the button.',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      type: { type: 'select', required: false },
    },
    text: {
      description: 'Text value of the button.',
      type: { text: 'string', required: true },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      // defaultValue is not appearing on preview. Could be result of a bug, submitted issue
      // https://github.com/storybookjs/storybook/issues/11983
      // defaultValue: 'primary',
      description: 'Style type of button.',
      name: 'type',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      type: { type: 'select', required: true },
    },
  },
}

// ===

const DefaultTemplate = (args) => <Button onClick={action('onClick')} {...args} />

export const Default = DefaultTemplate.bind({})

// ===

const startIconTemplate = ({ startIcon, ...args }) => <Button onClick={action('onClick')} startIcon={selectIcon(startIcon)} {...args} />

export const startIcon = startIconTemplate.bind({})

startIcon.args = {
  startIcon: 'AccountCircle',
}

startIcon.argTypes = {
  startIcon: {
    control: {
      type: 'select',
      options: ['AccountCircle', 'CloudUpload', 'VerifiedUser'],
    },
    description: 'Left-side button icon.',
    type: { text: 'string', required: true },
  },
}

// ===

const endIconTemplate = ({ endIcon, ...args }) => <Button onClick={action('onClick')} endIcon={selectIcon(endIcon)} {...args} />

export const endIcon = endIconTemplate.bind({})

endIcon.args = {
  endIcon: 'AccountCircle',
}

endIcon.argTypes = {
  endIcon: {
    control: {
      type: 'select',
      options: ['AccountCircle', 'CloudUpload', 'VerifiedUser'],
    },
    description: 'Right-side button icon.',
    type: { text: 'string', required: true },
  },
}

