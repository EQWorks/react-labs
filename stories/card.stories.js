import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, TextField, DynamicButton } from '../src'

import CheckIcon from '@material-ui/icons/Check'
import AccessTimeIcon from '@material-ui/icons/AccessTime'


const loginContent = (
  <div>
    <p style={{ marginBottom: '30px' }}>
      Enter your email and we will send you the authentication methods
    </p>
    <TextField
      id='success-check'
      label='Email'
      type='email'
      defaultValue='john.doe@mail.com'
      helperText='Enter your email address'
      endAdornment={<CheckIcon style={{ color: '#00d308' }} />}
      autoFocus
    />
  </div>
)

const subPgContent = (
  <div>
    <AccessTimeIcon style={{ color: '#0075ff', fontSize: '90px' }} />
    <p style={{ margin: '0px' }}>
      View recent 30 days of activities of your customers
    </p>
  </div>
)

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      actionSide='start'
      cardTitle='Interesting Title'
      cardContent='Some content goes here..'
      cardAction={<DynamicButton />}
    />
  ))
  .add('Small', () => (
    <Card
      size='sm'
      actionSide='center'
      cardTitle='Interesting Title'
      cardContent='Some content goes here..'
      cardAction={<DynamicButton />}
    />
  ))
  .add('Login: example', () => {
    return(
      <Card
        cardTitle='Log in'
        cardContent={loginContent}
        cardAction={<DynamicButton size='medium'>Send</DynamicButton>}
        actionSide='start'
      />
    )
  })
  .add('Home sub-page: example', () => {
    return(
      <Card
        width={320}
        height={190}
        cardTitle='Recent Activities'
        variantTitle='h6'
        alignTitle='center'
        cardContent={subPgContent}
        alignContent='center'
      />
    )
  })
