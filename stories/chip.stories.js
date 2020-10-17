import React from 'react'
import { Chip } from '../src/index'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  args: {
    label: 'chip',
  },
  argTypes: {
    custom: {
      control: 'color',
    },
    label: {
      description: 'The content of the label.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    onDelete: {
      control: null,
    },
    margin: {
      control: {
        options: [0, 1, 2],
        type: 'select',
      },
    },
  },
}

const Template = (args) => (
  <Chip {...args} />
)

export const Default = Template.bind({})

// ===

export const Delete = Template.bind({})

Delete.args = {
  onDelete: () => console.log('onDelete()'),
}
