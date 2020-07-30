import React from 'react'
import { action } from '@storybook/addon-actions'
import { makeStyles } from '@material-ui/core/styles'

import Button from '../src/button'

const useStyles = makeStyles({
  container: {
    '& button': {
      margin: '0 20px 0 0'
    }
  }
})

const buttonTypes = [
  'primary',
  'secondary',
  'tertiary'
]

export default {
  title: 'Button',
  component: Button
}

export const Default = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {buttonTypes.map((type, index) => (
        <Button onClick={action('onClick')} key={index} type={type}>
          Button
        </Button>
      ))}
    </div>
  )
}
