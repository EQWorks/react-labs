import React, { useState } from 'react'

import { FormControlLabel, Radio, RadioGroup } from '../src/index'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  args: {
    label: 'Item',
  },
  argTypes: {
    label: {
      description: 'The text to be used in an enclosing label element.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      description: 'If true, the radio will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
}

const Template = (args) => {
  const [value, setValue] = useState('firstItem')
  const checkOnChange = (e) => {
    setValue(e.target.value)
  }
  const styledRadio = <Radio />
  return (
    <RadioGroup value={value} onChange={checkOnChange}>
      <FormControlLabel
        disabled={args.disabled}
        value="firstItem"
        control={styledRadio}
        label={args.label}
      />
    </RadioGroup>
  )
}

const TemplateGroup = (args) => {
  const [value, setValue] = useState('firstItem')
  const checkOnChange = (e) => {
    setValue(e.target.value)
  }
  const styledRadio = <Radio />
  return (
    <RadioGroup value={value} onChange={checkOnChange}>
      <FormControlLabel
        disabled={args.disabled}
        value='firstItem'
        control={styledRadio}
        label={args.label}
      />
      <FormControlLabel
        disabled={args.disabled}
        value='secondItem'
        control={styledRadio}
        label={args.label}
      />
      <FormControlLabel
        disabled={args.disabled}
        value='thirdItem'
        control={styledRadio}
        label={args.label}
      />
    </RadioGroup>
  )
}

export const Default = Template.bind({})

// ===

export const Group = TemplateGroup.bind({})
