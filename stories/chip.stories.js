import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '../src/chip'

const defaultOptions = [
  {
    backgroundColor: '#f2c94c',
    label: 'item'
  },
  {
    backgroundColor: '#eb5757',
    label: 'item'
  },
  {
    backgroundColor: '#6fcf97',
    label: 'item'
  },
  {
    backgroundColor: '#828282',
    label: 'item'
  },
]

export default {
  component: Chip,
  title: 'Chip',
  excludeStories: /.*Data$/
}

export const Default = () => {
  return (
    <div>
      {defaultOptions.map((option, index) => (
        <Chip
          backgroundColor={option.backgroundColor}
          key={index}
          label={option.label}
        />
      ))}
    </div>
  )
}

export const Rectangular = () => {
  return (
    <div>
      {defaultOptions.map((option, index) => (
        <Chip
          backgroundColor={option.backgroundColor}
          key={index}
          label={option.label}
          rectangle={true}
        />
      ))}
    </div>
  )
}

export const Toggle = () => {
  return (
    <div>
      <Chip
        clickable={true}
        disableRipple
        label='item'
        onClick={action('onClick')}
        type='toggle'
      />
    </div>
  )
}

export const ToggleRectangular = () => {
  return (
    <div>
      <Chip
        clickable={true}
        disableRipple
        label='item'
        onClick={action('onClick')}
        rectangle={true}
        type='toggle'
      />
    </div>
  )
}

export const Deletable = () => {
  return (
    <div>
      <Chip
        disableRipple
        label='item'
        onDelete={action('onDelete')}
        type='deletable'
      />
    </div>
  )
}