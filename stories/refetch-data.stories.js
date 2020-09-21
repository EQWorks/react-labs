import React from 'react'

import { RefetchData } from '../src/index'

export default {
  title: 'Lab/Refetch Data',
  component: RefetchData,
  args: {
    fetchUrl: 'https://jsonplaceholder.typicode.com/users/1',
  },
  argTypes: {},
}

const Template = (args) => (
  <RefetchData {...args} />
)

export const Default = Template.bind({})

