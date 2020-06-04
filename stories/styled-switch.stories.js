import React, { useState } from "react";
import StyledSwitch from "../src/styled-switch";
import StyledCheckbox  from "../src/styled-checkbox";
import { FormControlLabel, FormGroup } from "@material-ui/core";

export default {
  component: StyledSwitch,
  title: "StyledSwitch",
};

export const Default = () => {
  return (
    <FormGroup>
      <FormControlLabel
        value="firstItem"
        control={<StyledSwitch/>}
        label="Default"
      />
       <FormControlLabel
        value="firstItem"
        control={<StyledSwitch checked={true} disabled/>}
        label="Checked + Disabled"
      />

      <FormControlLabel
        value="firstItem"
        control={<StyledSwitch checked={false} disabled/>}
        label="Unchecked + Disabled"
      />
    </FormGroup>
  );
};
