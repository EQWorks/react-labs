import React from 'react'

import { RefetchData } from '../src/index'

export default {
  title: 'Lab/Refetch Data',
  component: RefetchData,
  args: {
    fetchUrl: 'http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/users/1',
  },
  argTypes: {},
}

const Template = (args) => (
  <RefetchData {...args} />
)

export const Default = Template.bind({})

