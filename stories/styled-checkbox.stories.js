import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { StyledCheckbox } from "../src/index";

export default {
  component: StyledCheckbox,
  title: "StyledCheckbox",
};

export const Default = () => {
  const [checked, setChecked] = useState(true);
  const checkOnChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          disabled={false}
          checked={checked}
          onChange={checkOnChange}
        />
      }
      label="checkbox default"
    />
  );
};

export const Disabled = () => {
  return (
    <div>
      <FormControlLabel
        control={<StyledCheckbox disabled={true} checked={true} />}
        label="checkbox disabled"
      />
      <br />
      <FormControlLabel
        control={<StyledCheckbox disabled={true} checked={false} />}
        label="checkbox disabled"
      />
    </div>
  );
};
