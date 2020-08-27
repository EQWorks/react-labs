import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

export default {
  title: 'Theme/Typography',
  component: Typography,
  args: {
    children: 'Text',
    variant: 'h1',
  },
  argTypes: {
    children: {
      defaultValue: '',
      description: 'Toggle demonstration loading times for component.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    variant: {
      control: {
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'body1',
          'button',
          'caption',
          'overline',
        ],
        type: 'select',
      },
      defaultValue: '',
      description: 'Applies the theme typography styles.',
      table: {
        type: { summary: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'body1' | 'button' | 'caption' | 'overline'" },
      },
      type: { name: 'select', required: true },
    },
  },
}

const Template = ({ children, variant }) => <Typography variant={variant}>{children}</Typography>

Template.propTypes = {
  /**
    * The children of the component.
  */
  children: PropTypes.string.isRequired,
  /**
    * Applies the theme typography styles.
  */
  variant: PropTypes.string.isRequired,
}

export const Default = Template.bind({})
