import React from "react";
import { storiesOf } from "@storybook/react";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { Alert } from "../src/index";

storiesOf("Alert", module)
  .add("Default", () => (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Alert severity="error" message="Error message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert severity="warning" message="Warning message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert severity="info" message="Info message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert severity="success" message="Success message." />
      </div>
    </>
  ))
  .add("Outlined", () => (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="outlined" severity="error" message="Error message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert
          variant="outlined"
          severity="warning"
          message="Warning message."
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="outlined" severity="info" message="Info message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert
          variant="outlined"
          severity="success"
          message="Success message."
        />
      </div>
    </>
  ))
  .add("Filled", () => (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="filled" severity="error" message="Error message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="filled" severity="warning" message="Warning message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="filled" severity="info" message="Info message." />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Alert variant="filled" severity="success" message="Success message." />
      </div>
    </>
  ))
  .add("Success with header", () => (
    <Alert severity="success" header="Msg Header" message="Success message." />
  ))
  .add("Success no icon", () => (
    <Alert icon={false} severity="success" message="Success message." />
  ))
  .add("Success dif icon", () => (
    <Alert
      iconMapping={{ success: <VisibilityOff fontSize="inherit" /> }}
      severity="success"
      message="Success message."
    />
  ));
