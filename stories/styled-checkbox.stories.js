import React, { useState } from "react";
import StyledCheckbox  from "../src/styled-checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

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
        control={
          <StyledCheckbox
            disabled={true}
            checked={true}
          />
        }
        label="checkbox disabled"
      />
      <br/>
      <FormControlLabel
        control={
          <StyledCheckbox
            disabled={true}
            checked={false}
          />
        }
        label="checkbox disabled"
      />
    </div>
  );
};