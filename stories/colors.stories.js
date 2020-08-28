import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator'
import Button from '../src/button'
import { Box, Tooltip, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    margin: `${theme.spacing(4)}px 0px`,
    borderRadius: 10,
    '& div': {
      boxSizing: 'border-box',
      display: 'flex',
      height: 90,
      flex: 1,
      marginRight: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      '& p': {
        textAlign: 'center',
      },
    },
  },
}))

export default {
  title: 'Theme/Palettes',
  component: Box,
  args: {},
  argTypes: {},
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const systems = ['error', 'warning', 'info', 'success']

const getContrastText = (color) => {
  return getContrastRatio(color, '#000') < 4.51 ? '#fff' : '#000'
}


const Template = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [hexCode, setHexCode] = useState(false)
  const [open, setOpen] = useState(false)
  const defaultMessage = 'Click to copy to clipboard'
  const [alert, setAlert] = useState(defaultMessage)
  
  const primaryColors = shades.map((shade) => ({
    color: theme.palette.primary[shade],
    label: shade,
  }))
  const secondaryColors = shades.map((shade) => ({
    color: theme.palette.secondary[shade],
    label: shade,
  }))
  const systemColors = systems.map((system) => ({
    color: theme.palette[system].main,
    label: system,
  }))

  const copyToClipboard = (display) => {
    setOpen(!open)
    navigator.clipboard.writeText(display)
    setAlert('Copied!')
  }

  const renderPalettes = (colors, title) => {
    const palettes = colors.map(({ color, label }, i) => {
      const display = hexCode ? color : label
      return (
        <Tooltip key={i} title={alert} onClose={()=>setAlert(defaultMessage)}>
          <div
            onClick={()=>copyToClipboard(display)}
          >
            <Box style={{ backgroundColor: color }} boxShadow={1}>
              <Typography
                variant="body1"
                style={{ color: getContrastText(color) }}
              >
                {display}
              </Typography>
            </Box>
          </div>
        </Tooltip>
      )
    })

    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '8px',
          }}
        >
          <Typography
            variant="body1"
            style={{ fontWeight: 600, color: theme.palette.secondary[600] }}
            gutterBottom
          >{`theme.palette.${title}`}</Typography>
        </div>
        <div className={classes.container}>{palettes}</div>
      </>
    )
  }

  return (
    <>
      <div className={classes.buttonContainer}>
        <Button type="tertiary" noSpacing onClick={() => setHexCode(!hexCode)}>
          {hexCode ? 'View shades' : 'View hexcode'}
        </Button>
      </div>
      {renderPalettes(primaryColors, 'primary')}
      {renderPalettes(secondaryColors, 'secondary')}
      {renderPalettes(systemColors, 'system')}
    </>
  )
}

export const Default = Template.bind({})
