import React from 'react'

import { RefetchData } from '../src/index'


export default {
  title: 'Lab/Refetch Data',
  component: RefetchData,
  args: {
    fetchUrl: 'https://api.github.com/repos/tannerlinsley/react-query',
  },
  argTypes: {},
}

const Template = (args) => (
  <RefetchData {...args} />
)

export const Default = Template.bind({})

