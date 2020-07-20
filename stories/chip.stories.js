import React from 'react'

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
          isRectangle={true}
          key={index}
          label={option.label}
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
        isRectangle={true}
        label='item'
      />
    </div>
  )
}