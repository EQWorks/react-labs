import React from 'react'

import { DataTable } from '../../src/index'
import province from '../data/provinces'

export default {
  title: 'Deprecated/DataTable',
  component: DataTable,
  argTypes: {
    data: {
      control: null,
    },
  },
}

const Template = (args) => <DataTable {...args} />

export const Default = Template.bind({})

// ===

export const WithData = Template.bind({})

WithData.args = {
  data: province,
  isPercentage: true,
}

