/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'

import QuickFilterItem from './quick-filter-item'

const QuickFilters = ({ disabled, categories, filterOnClick }) => {
  const QuickFilterList = categories.map((category) => (
    <QuickFilterItem
      category={category}
      filterOnClick={filterOnClick}
      disabled={disabled}
    ></QuickFilterItem>
  ))

  return <div>{QuickFilterList}</div>
}

QuickFilters.propTypes = {
  categories: PropTypes.object,
  filterOnClick: PropTypes.function,
  disabled: PropTypes.bool
}

QuickFilters.defaultProps = {
  categories: [
    {
      label: 'Data missing',
      isActive: false
    }
  ],
  filterOnClick: () => {},
  disabled: false
}

export default QuickFilters
