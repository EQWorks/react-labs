import React from 'react'

import { FormControlLabel, FormGroup, Checkbox } from '../src/index'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'If `true`, the checkbox will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => (
  <Checkbox {...args} />
)

const TemplateFormControlLabel = (args) => (
  <FormControlLabel control={<Checkbox {...args} />} label={args.label} />
)

const TemplateFormGroup = (args) => (
  <FormGroup>
    <FormControlLabel control={<Checkbox {...args} />} label={args.label} />
    <FormControlLabel control={<Checkbox {...args} />} label={args.label} />
  </FormGroup>
)

export const Default = Template.bind({})

// ===

export const ControlLabel = TemplateFormControlLabel.bind({})

ControlLabel.args = {
  label: 'Item',
}

ControlLabel.argTypes = {
  label: {
    description: 'The text to be used in an enclosing label element.',
    table: {
      type: { summary: 'string' },
    },
    type: { name: 'string', required: false },
  },
}

// ===

export const Group = TemplateFormGroup.bind({})

Group.args = {
  label: 'Item',
}

Group.argTypes = {
  label: {
    description: 'The text to be used in an enclosing label element.',
    table: {
      type: { summary: 'string' },
    },
    type: { name: 'string', required: false },
  },
}
