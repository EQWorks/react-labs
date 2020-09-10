# react-labs

![Master](https://github.com/EQWorks/react-labs/workflows/Master/badge.svg)

`react-labs` is a collection of common React components that builds off of the [Material-UI](https://material-ui.com/) design system.

## Installation

1. Install `react-labs`, run:
```
npm i @eqworks/react-labs
```

2. Install the required peer dependencies, run:
```
npm i @material-ui/core @material-ui/lab @material-ui/icons react react-dom
```

---

## Usage

1. Wrap your application inside a <ThemeProvider> component using the `react-labs` theme, as such:
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from '@eqworks/react-labs'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
```

2. Import any component into your project:
```jsx
import { Button } from '@eqworks/react-labs'
```

3. Render the component in the DOM:
```jsx
export default function MyComponent() {
  return (
    <div>
      <h1>This is a button</h1>
      <Button size='medium' type='primary'>By Button</Button>
    </div>
  )
}
```
