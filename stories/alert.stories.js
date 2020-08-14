import React from 'react'
// import { storiesOf } from '@storybook/react'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { Alert } from '../src/index'

export default {
  title: 'Lab/Alert',
  component: Alert,
  args: {
    message: 'Message',
    severity: 'success',
    variant: 'standard',
  },
  argTypes: {
    severity: {
      control: {
        options: ['error', 'warning', 'info', 'success'],
        type: 'select',
      },
    },
    variant: {
      control: {
        options: ['standard', 'outlined', 'filled'],
        type: 'select',
      },
      type: { name: 'select', required: true },
    },
  },
}

const Template = (args) => <Alert {...args} />

export const Default = Template.bind({})

// ===

export const NoIcon = Template.bind({})

NoIcon.parameters = {
  docs: {
    source: {
      code: `
<Alert
  icon={false}
  message="Message"
  severity="success"
  variant="standard"
  width="100%"
/>`,
    },
  },
}

NoIcon.args = {
  icon: false,
}

NoIcon.argTypes = {
  icon: {
    control: null,
    description: 'Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the `severity` prop.',
  },
}


// ===

export const customIcon = Template.bind({})

customIcon.args = {
  iconMapping: { success: <VisibilityOff fontSize='inherit' /> },
}

customIcon.argTypes = {
  iconMapping: {
    control: null,
    description: 'The component maps the severity prop to a range of different icons, for instance success to `<SuccessOutlined>`. If you wish to change this mapping, you can provide your own. Alternatively, you can use the `icon` prop to override the icon displayed.',
    table: {
      type: { summary: "{ severity: <IconComponent fontSize='inherit' /> }" },
    },
  },
}
