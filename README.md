# react-labs

![Master](https://github.com/EQWorks/react-labs/workflows/Master/badge.svg)

A [React](https://reactjs.org/) user interface kit built with [Material-UI](https://material-ui.com/).

## Getting started

Firstly, install `react-labs`:
```
npm i @eqworks/react-labs
```

Next, install the required peer dependencies:
```
npm i @material-ui/core @material-ui/icons @material-ui/lab react react-dom
```

Once you have installed all the required dependencies, wrap your application in a `<ThemeProvider>`:
```jsx
import { ThemeProvider } from '@eqworks/react-labs';

const MyApp = () => (
  <ThemeProvider>
    Hello world!
  </ThemeProvider>
)
```

Now, you can start using `react-labs` components:
```jsx
import { Button, Typography } from '@eqworks/react-labs'

const MyComponent = () => (
  <div>
    <Typography variant='h1'>Hello world!</Typography>
    <Button type='primary'>Click me!</Button>
  </div>
)
```

> **Note:** You can override the `react-labs` default theme by passing a `theme` prop to `<ThemeProvider>`.<br />[Click here to find out how to create your own theme using Material UI's `createMuiTheme` method](https://material-ui.com/customization/theming/#api).