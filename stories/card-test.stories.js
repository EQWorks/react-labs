import React from "react";

import Card from "../src/card-test";

export default {
  title: "CardTest",
  component: Card,
};

export const Primary = () => {
  return <Card type="primary" />;
};

export const Secondary = () => {
  return <Card type="secondary" />;
};

export const Success = () => {
  return <Card type="success" />;
};
