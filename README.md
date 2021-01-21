# react-labs

![Master](https://github.com/EQWorks/react-labs/workflows/Master/badge.svg)

A [React](https://reactjs.org/) user interface kit built with [Material-UI](https://material-ui.com/).

## Installation

1. Install `react-labs` (you can use either [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/)):

```shell
npm i @eqworks/react-labs
```

2. Install the required peer dependencies:

```shell
npm i @eqworks/lumen-ui @material-ui/core @material-ui/icons @material-ui/lab react react-dom
```

## Usage

1. Import the required `react-slick` CSS files:

```jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

2. Wrap your application in a `<ThemeProvider>`:

```jsx
import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@eqworks/react-labs";

import App from "./app";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

3. Now you can start using `react-labs` components:

```jsx
import { Button, Typography } from "@eqworks/react-labs";

const MyComponent = () => (
  <div>
    <Typography variant="h1">Hello world!</Typography>
    <Button type="primary">Click me!</Button>
  </div>
);
```

> **Note:** You can override the `react-labs` default theme by passing a `theme` prop to `<ThemeProvider>`.<br />[Click here to find out how to create your own theme using Material UI's `createMuiTheme` method](https://material-ui.com/customization/theming/#api).
