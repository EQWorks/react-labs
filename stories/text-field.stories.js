import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { TextField } from "../src/index";

storiesOf("TextField", module)
  .add("Default", () => <TextField />)
  .add("Helper Text", () => (
    <TextField autoFocus helperText="Helper text goes here..." />
  ))
  .add("Error", () => (
    <TextField error autoFocus label="Error" helperText="Fix it now." />
  ))
  .add("Multiline", () => (
    <TextField
      autoFocus
      label="Multiline"
      helperText="This multiline configured to display 5 rows in height."
      placeholder="This multiline have some placeholder text too..."
      multiline
      rows={5}
    />
  ))
  .add("Adornments", () => <TextField startAdornment="$" endAdornment="Kg" />)
  .add("Adornment as Button", () => {
    const [values, setValues] = useState({
      show: false,
      password: "hello there",
    });
    return (
      <TextField
        id="password"
        label="Password"
        placeholder="Enter your password"
        type={values.show ? "text" : "password"}
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        endAdornment={values.show ? <Visibility /> : <VisibilityOff />}
        adornmentButton
        adornmentOnClick={() => setValues({ ...values, show: !values.show })}
      />
    );
  })
  .add("Successful Check", () => {
    return (
      <TextField
        id="success-check"
        label="Email"
        type="email"
        defaultValue="john.doe@mail.com"
        helperText="Enter your email address"
        endAdornment={<CheckIcon style={{ color: "#00d308" }} />}
        autoFocus
      />
    );
  })
  .add("Unsuccessful Check", () => {
    return (
      <TextField
        id="success-check"
        label="Error"
        type="text"
        defaultValue="ADSBRX"
        helperText="Invalid passcode"
        endAdornment={<CloseIcon style={{ color: "#ea0000" }} />}
        autoFocus
        error
      />
    );
  });
