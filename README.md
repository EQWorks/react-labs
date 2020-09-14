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

Once you have installed all the required packages, wrap your application in a "`<ThemeProvider>` provided by `@material-ui/core`" using the `Theme` object provided by `react-labs` as the `theme` property:
```jsx
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '@eqworks/react-labs';

const MyApp = () => (
  <ThemeProvider theme={Theme}>
    Hello world!
  </ThemeProvider>
)
```

Now, you can start using `react-labs` components:
```jsx
import { Button, Typography } from '@eqworks/react-labs'

const MyApp = () => (
  <ThemeProvider theme={Theme}>
    <Typography variant='h1'>Hello world!</Typography>
    <Button type='primary'>Click me!</Button>
  </ThemeProvider>
)
```
