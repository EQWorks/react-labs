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
        label='primary'
        {...actionsData}
      />
      <Chip
        backgroundColor='#f2c94c'
        label='yellow'
        {...actionsData}
      />
      <Chip
        backgroundColor='#eb5757'
        label='red'
        {...actionsData}
      />
      <Chip
        backgroundColor='#6fcf97'
        label='green'
        {...actionsData}
      />
      <Chip
        backgroundColor='#828282'
        label='grey'
        {...actionsData}
      />
    </div>
  )
}
