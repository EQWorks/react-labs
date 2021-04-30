import React, { useState } from 'react'

import { QuickFilters } from '../src'
import categories from './data/categories'


export default {
  title: 'Inputs/Quick Filters',
  component: QuickFilters,
}

const Template = () => <QuickFilters />
const TemplateData = () => {
  const [categoriesData, setCategoriesData] = useState(categories)

  const filterOnClick = (label) => {
    const newCategoriesData = categoriesData.map((data) =>
      data.label === label ? { ...data, isActive: !data.isActive } : data,
    )
    setCategoriesData(newCategoriesData)
  }

  return (
    <QuickFilters categories={categoriesData} filterOnClick={filterOnClick} />
  )
}

export const Default = Template.bind({})

Default.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

export const Data = TemplateData.bind({})

Data.parameters = {
  controls: { hideNoControlsWarning: true },
}
