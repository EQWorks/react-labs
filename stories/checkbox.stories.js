import React from 'react'

import { Checkbox } from '../src/index'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    label: 'Item',
  },
  argTypes: {},
}

const Template = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
