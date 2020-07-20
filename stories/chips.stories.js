import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '../src/chip'

export default {
  component: Chip,
  title: 'Chip',
  excludeStories: /.*Data$/
}

export const actionsData = {
  onClick: action('onClick')
}

export const Default = () => {
  return (
    <div>
      <Chip
        backgroundColor='primary'
        label='Primary'
        {...actionsData}
      />
      <Chip
        backgroundColor='error'
        label='Error'
        {...actionsData}
      />
      <Chip
        backgroundColor='#f2c94c'
        color='#000000'
        label='Yellow'
        {...actionsData}
      />
      <Chip
        backgroundColor='#eb5757'
        color='#000000'
        label='Red'
        {...actionsData}
      />
      <Chip
        backgroundColor='#6fcf97'
        color='#000000'
        label='Green'
        {...actionsData}
      />
      <Chip
        backgroundColor='#828282'
        label='Grey'
        {...actionsData}
      />
    </div>
  )
}
