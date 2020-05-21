import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import { StyledCheckbox } from "../src";

storiesOf("Checkbox", module).add("Default", () => {
  const [checked, setChecked] = useState(true);
  const checkOnChange = (e) => {
    setChecked(e.target.checked);
  };
  return <StyledCheckbox disabled={true} checked={checked} onChange={checkOnChange}/>;
});
