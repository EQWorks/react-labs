import React, { useState } from 'react'

import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import LOCUSTheme from '../src/themes'


configure(require.context('../stories', true, /\.stories\.js$/), module)

const GlobalWrapper = (storyFn) => {
  const [checked, setChecked] = useState(false)

  const renderStory = () => {
    if (checked) {
      return (
        <ThemeProvider theme={LOCUSTheme}>
          {storyFn()}
        </ThemeProvider>
      )
    }

    return storyFn()
  }

  return (
    <>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={({ target: { checked } }) => { setChecked(checked) }}
              name='locus'
              color='primary'
            />
          }
          label='Use LOCUS Theme'
        />
      </FormGroup>
      {renderStory()}
    </>
  )
}
addDecorator(GlobalWrapper)
