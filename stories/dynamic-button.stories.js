import React from "react";
import { storiesOf } from "@storybook/react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { DynamicButton } from "../src/index";

const arr = [
  {
    type: "primary",
    size: "large",
  },
  {
    type: "secondary",
    size: "medium",
  },
  {
    type: "tertiary",
    size: "small",
  },
];

storiesOf("DynamicButton", module)
  .add("Default", () => <DynamicButton />)
  .add("Types", () => (
    <div>
      {arr.map(({ type }, index) => (
        <DynamicButton key={index} type={type}>
          {type}
        </DynamicButton>
      ))}
    </div>
  ))
  .add("With an icon", () => (
    <div>
      {arr.map(({ type }, index) => (
        <DynamicButton key={index} type={type} startIcon={<CloudUploadIcon />}>
          Click
        </DynamicButton>
      ))}
    </div>
  ))
  .add("With an icon on the right side", () => (
    <div>
      {arr.map(({ type }, index) => (
        <DynamicButton key={index} type={type} endIcon={<CloudUploadIcon />}>
          Click
        </DynamicButton>
      ))}
    </div>
  ))
  .add("Size", () => (
    <div>
      {arr.map(({ type, size }, index) => (
        <DynamicButton
          key={index}
          type={type}
          startIcon={<CloudUploadIcon />}
          size={size}
        >
          Click
        </DynamicButton>
      ))}
    </div>
  ))
  .add("disabled", () => (
    <div>
      {arr.map(({ type }, index) => (
        <DynamicButton
          key={index}
          test={"this test"}
          type={type}
          disabled={true}
          startIcon={<CloudUploadIcon />}
          size="large"
        >
          Click
        </DynamicButton>
      ))}
    </div>
  ));
