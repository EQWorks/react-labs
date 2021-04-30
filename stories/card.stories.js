import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import CheckIcon from '@material-ui/icons/Check'

import { Button, TextField } from '@eqworks/lumen-ui'
import { Card } from '../src/index'


const loginContent = (
  <>
    <p style={{ marginBottom: '30px' }}>
      Enter your email and we will send you the authentication methods
    </p>
    <TextField
      id="success-check"
      label="Email"
      type="email"
      defaultValue="john.doe@mail.com"
      helperText="Enter your email address"
      endAdornment={<CheckIcon style={{ color: '#00d308' }} />}
      autoFocus
    />
  </>
)

const subPgContent = (
  <>
    <AccessTimeIcon style={{ color: '#0075ff', fontSize: '90px' }} />
    <p style={{ margin: '0px' }}>
      View recent 30 days of activities of your customers
    </p>
  </>
)

const styledContainerProps = {
  pattern: { style: 3 },
}

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    actionSide: 'start',
    alignContent: 'start',
    alignTitle: 'start',
    cardContent: 'Card content.',
    cardTitle: 'Card Title',
    size: 'md',
    variantContent: 'body2',
    variantTitle: 'h5',
  },
  argTypes: {
    actionSide: {
      control: {
        options: ['start', 'center', 'end'],
        type: 'select',
      },
    },
    alignContent: {
      control: {
        options: ['start', 'center', 'end'],
        type: 'select',
      },
    },
    alignTitle: {
      control: {
        options: ['start', 'center', 'end'],
        type: 'select',
      },
    },
    cardAction: {
      control: null,
    },
    headerProps: {
      control: null,
    },
    size: {
      control: {
        options: ['sm', 'md'],
        type: 'select',
      },
    },
    styledContainerProps: {
      control: null,
    },
    variantContent: {
      control: {
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'button',
          'overline',
          'srOnly',
          'inherit',
        ],
        type: 'select',
      },
    },
    variantTitle: {
      control: {
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'button',
          'overline',
          'srOnly',
          'inherit',
        ],
        type: 'select',
      },
    },
  },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

// ===

export const Action = Template.bind({})

Action.args = {
  actionSide: 'center',
  cardAction: <Button>Button</Button>,
}

Action.argTypes = {
  cardAction: {
    control: null,
  },
}

// ===

export const Login = Template.bind({})

Login.args = {
  actionSide: 'start',
  cardAction: <Button>Send</Button>,
  cardContent: loginContent,
}

Login.argTypes = {
  cardAction: {
    control: null,
  },
  cardContent: {
    control: null,
  },
}

// ===

export const HomeSubPage = Template.bind({})

HomeSubPage.args = {
  alignContent: 'center',
  alignTitle: 'center',
  cardContent: subPgContent,
  cardTitle: 'Recent Activities',
  height: 190,
  variantTitle: 'h6',
  width: 320,
}

HomeSubPage.argTypes = {
  cardContent: {
    control: null,
  },
  height: {
    control: null,
  },
  width: {
    control: null,
  },
}

// ===

export const Wrapper = Template.bind({})

Wrapper.args = {
  alignContent: 'center',
  alignTitle: 'center',
  cardContent: subPgContent,
  cardTitle: 'Recent Activities',
  height: 190,
  styledContainerProps: styledContainerProps,
  variantTitle: 'h6',
  width: 320,
}

Wrapper.argTypes = {
  cardContent: {
    control: null,
  },
  height: {
    control: null,
  },
  width: {
    control: null,
  },
}
