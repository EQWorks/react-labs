import React from 'react'

import { Checkbox } from '../src/index'

export default {
  title: 'Lab/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
}

const Template = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
