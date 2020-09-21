import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../src/typography'
import { Divider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default {
  title: 'Theme/Typography',
  component: Typography,
  args: {
    children: 'Text',
    variant: 'h1',
    marginBottom: 0,
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
          'subtitle2',
          'body1',
          'body2',
          'button',
          'caption',
          'overline',
        ],
        type: 'select',
      },
      defaultValue: '',
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary:
            "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'",
        },
      },
      type: { name: 'select', required: true },
    },
    marginBottom: {
      control: {
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        type: 'select',
      },
      defaultValue: 0,
      description: 'adds margin at the bottom.',
    },
    secondary: {
      control: {
        options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
        type: 'select',
      },
      defaultValue: undefined,
      description: 'apply secondary color palettes.',
    },
  },
}
const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
]

const Template = ({ variant, children, marginBottom, secondary }) => {
  
  const theme = useTheme()
  const typoLists = variants.map((variant, i) => (
    <Typography
      key={i}
      variant={variant}
      style={{ display: 'block' }}
      marginBottom={3}
    >{`Open Sans/${variant}/${theme.typography[variant].fontSize}`}</Typography>
  ))


  return (
    <>
      <div style={{ margin: theme.spacing(8, 4) }}>
        <Typography variant="h5" marginBottom={2}>
          Typeface
        </Typography>
        <Divider />
        {typoLists}
      </div>
      <div style={{ margin: theme.spacing(8, 4) }}>
        <Typography variant="h5" marginBottom={2}>
          Playground
        </Typography>
        <div style={{ backgroundColor: theme.palette.secondary[100], display: 'inline-block' }}>
          <Typography variant={variant} marginBottom={marginBottom} secondary={secondary}>
            {children}
          </Typography>
        </div>
      </div>
    </>
  )
}

Template.propTypes = {
  /**
   * The children of the component.
   */
  children: PropTypes.string.isRequired,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.string.isRequired,
  marginBottom: PropTypes.number.isRequired,
}

export const Default = Template.bind({})
