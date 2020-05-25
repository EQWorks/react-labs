import React, { useState } from "react";
import StyledRadio from "../src/styled-radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default {
  component: StyledRadio,
  title: "Radio",
};

export const Default = () => {
  const [value, setValue] = useState('firstItem');
  const checkOnChange = (e) => {
    setValue(e.target.value);
  }
  const styledRadio = (
    <StyledRadio/>
  )
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
