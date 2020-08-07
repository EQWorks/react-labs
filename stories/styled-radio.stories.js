import React, { useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { StyledRadio } from "../src/index";

export default {
  component: StyledRadio,
  title: "StyledRadio",
};

export const Default = () => {
  const [value, setValue] = useState("firstItem");
  const checkOnChange = (e) => {
    setValue(e.target.value);
  };
  const styledRadio = <StyledRadio />;
  return (
    <RadioGroup value={value} onChange={checkOnChange}>
      <FormControlLabel
        value="firstItem"
        control={styledRadio}
        label="First item"
      />
      <FormControlLabel
        value="secondItem"
        control={styledRadio}
        label="Second item"
      />
      <FormControlLabel
        value="thirdItem"
        control={styledRadio}
        label="Third item"
      />
      <FormControlLabel
        value="disabled"
        disabled
        control={styledRadio}
        label="Fourth item"
      />
    </RadioGroup>
  );
};

export const Disabled = () => {
  return (
    <div>
      <FormControlLabel
        control={<StyledRadio disabled={true} checked={true} />}
        label="radio disabled"
      />
      <br />
      <FormControlLabel
        control={<StyledRadio disabled={true} checked={false} />}
        label="radio disabled"
      />
    </div>
  );
};
