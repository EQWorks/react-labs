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
    children: 'Button',
    size: 'medium',
    type: 'primary',
  },
  argTypes: {
    children: {
      description: '`node`',
      type: { text: 'string', required: true },
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'small', 'large'],
      },
      description: '`medium` | `small` | `large`',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      type: { type: 'select', required: false },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      // defaultValue is not appearing on preview. Could be result of a bug, submitted issue
      // https://github.com/storybookjs/storybook/issues/11983
      // defaultValue: 'primary',
      description: '`primary` | `secondary` | `tertiary`',
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

const DefaultTemplate = (args) => <Button onClick={action('onClick')} {...args}>{args.children}</Button>

export const Default = DefaultTemplate.bind({})

// ===

const startIconTemplate = ({ startIcon, ...args }) => <Button onClick={action('onClick')} startIcon={selectIcon(startIcon)} {...args}>{args.children}</Button>

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
    description: '`svg`',
    type: { text: 'string', required: true },
  },
}

// ===

const endIconTemplate = ({ endIcon, ...args }) => <Button onClick={action('onClick')} endIcon={selectIcon(endIcon)} {...args}>{args.children}</Button>

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
    description: '`svg`',
    type: { text: 'string', required: true },
  },
}

