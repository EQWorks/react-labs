import React, { useState } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { StyledRadio } from '../src/index'

export default {
  title: 'Inputs/StyledRadio',
  component: StyledRadio,
  args: {
    disabled: false,
    firstItemLabel: 'First item',
    secondItemLabel: 'First item',
    thirdItemLabel: 'First item',
  },
  argTypes: {
    disabled: {
      description: 'If `true`, the radio will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: 'boolean',
    },
    firstItemLabel: {
      description: 'The label for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      type: 'string',
    },
    secondItemLabel: {
      description: 'The label for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      type: 'string',
    },
    thirdItemLabel: {
      description: 'The label for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      type: 'string',
    },
  },
}

const Template = (args) => {
  const [value, setValue] = useState('firstItem')
  const checkOnChange = (e) => {
    setValue(e.target.value)
  }
  const styledRadio = <StyledRadio />
  return (
    <RadioGroup value={value} onChange={checkOnChange}>
      <FormControlLabel
        disabled={args.disabled}
        value='firstItem'
        control={styledRadio}
        label={args.firstItemLabel}
      />
      <FormControlLabel
        disabled={args.disabled}
        value='secondItem'
        control={styledRadio}
        label={args.secondItemLabel}
      />
      <FormControlLabel
        disabled={args.disabled}
        value='thirdItem'
        control={styledRadio}
        label={args.thirdItemLabel}
      />
    </RadioGroup>
  )
}

export const Default = Template.bind({})
