import React, { useState } from "react";
import { StyledCheckbox } from "../src";

export default {
  component: StyledCheckbox,
  title: 'Checkbox',
};

export const Default = () => {
  const [checked, setChecked] = useState(true);
  const checkOnChange = (e) => {
    setChecked(e.target.checked);
  };
  return <StyledCheckbox disabled={false} checked={checked} onChange={checkOnChange}/>;
};
