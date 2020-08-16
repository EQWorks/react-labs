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
  /**
    * The categories of the component.
  */
  categories: PropTypes.object,
  /**
    * Toggle category item between enabled and disabled.
  */
  disabled: PropTypes.bool,
  /**
    * Filter component based on selection.
  */
  filterOnClick: PropTypes.function,
}

QuickFilters.defaultProps = {
  categories: [
    {
      label: 'Data missing',
      isActive: false,
    },
  ],
  disabled: false,
  filterOnClick: () => {},
}

export default QuickFilters
