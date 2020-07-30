import React from 'react'
import { action } from '@storybook/addon-actions'
import { makeStyles } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import Button from '../src/button'

const useStyles = makeStyles({
  container: {
    '& button': {
      margin: '0 20px 20px 0'
    }
  }
})

const ContentWrapper = (storyFn) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>{storyFn()}</div>
  )
}

const buttonTypes = [
  'primary',
  'secondary',
  'tertiary'
]

const sizeTypes = [
  'small',
  'medium',
  'large'
]

export default {
  title: 'Button',
  component: Button,
  decorators: [ContentWrapper]
}

export const Default = () => {
  return (
    <div>
      {buttonTypes.map((type, index) => (
        <Button
          onClick={action('onClick')}
          key={index}
          type={type}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  )
}

export const IconLeft = () => {
  return (
    <div>
      {buttonTypes.map((type, index) => (
        <Button
          onClick={action('onClick')}
          key={index}
          startIcon={<CloudUploadIcon />}
          type={type}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  )
}
export const IconRight = () => {
  return (
    <div>
      {buttonTypes.map((type, index) => (
        <Button
          endIcon={<CloudUploadIcon />}
          onClick={action('onClick')}
          key={index}
          type={type}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  )
}

export const Size = () => {
  return (
    <div>
      {buttonTypes.map((buttonType, buttonIndex) => (
        <div key={buttonIndex}>
          {sizeTypes.map((sizeType, sizeIndex) => (
            <Button
              endIcon={<CloudUploadIcon />}
              key={sizeIndex}
              onClick={action('onClick')}
              size={sizeType}
              type={buttonType}
            >
              {sizeType.charAt(0).toUpperCase() + sizeType.slice(1)}
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}

export const Disabled = () => {
  return (
    <div>
      {buttonTypes.map((type, index) => (
        <Button
          disabled
          onClick={action('onClick')}
          key={index}
          type={type}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  )
}