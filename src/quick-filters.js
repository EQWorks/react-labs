/* eslint-disable react/jsx-key */
import React from "react";
import QuickFilterItem from "./quick-filter-item";
import PropTypes from "prop-types";

const QuickFilters = ({ categories, filterOnClick }) => {
  const QuickFilterList = categories.map((category) => (
    <QuickFilterItem
      category={category}
      filterOnClick={filterOnClick}
    ></QuickFilterItem>
  ));

  return <div>{QuickFilterList}</div>;
};

QuickFilterItem.propTypes = {
  category: PropTypes.object,
  filterOnClick: PropTypes.function,
};

export default QuickFilters;
