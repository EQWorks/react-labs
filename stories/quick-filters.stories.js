import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import { QuickFilters } from "../src";

import categories from "./data/categories";



storiesOf('QuickFilters', module)
  .add('Default', () => (
    <QuickFilters />
  ))

storiesOf("QuickFilters", module).add("with data", () => {
  const [categoriesData, setCategoriesData] = useState(categories);

  const filterOnClick = (label) => {
    const newCategoriesData = categoriesData.map((data) =>
      data.label === label ? { ...data, isActive: !data.isActive } : data
    );
    setCategoriesData(newCategoriesData);
  };

  return <QuickFilters categories={categoriesData} filterOnClick={filterOnClick}/>;
});

