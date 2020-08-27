import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
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
  args: {
  },
  argTypes: {
  },
}

const shades = [50,100,200,300,400,500,600,700,800,900]
const systems = ['error', 'warning', 'info', 'success']


const getContrastText = (color) => {
  return getContrastRatio(color,'#000') < 4.51 ? '#fff' : '#000'
}


const Template = () => {
  const classes = useStyles()
  const theme = useTheme()
  const primaryColors = shades.map(shade => theme.palette.primary[shade])
  const secondaryColors = shades.map(shade => theme.palette.secondary[shade])
  const systemColors = systems.map(system => theme.palette[system].main)
    
  const renderPalettes = (colors, title) => {    
    const palettes = colors.map((color, i) => <Box key={i} style={{ backgroundColor: color }} boxShadow={1}>
      <Typography variant='body1' style={{ color: getContrastText(color) }}>{`${color}`}</Typography>
    </Box>)
    
    return (
      <>
        <Typography variant='subtitle1' gutterBottom>{title}</Typography>
        <Typography variant='body1' style={{ fontWeight: 600, color: theme.palette.secondary[600] }} gutterBottom>{`theme.palette.${title}`}</Typography>
        <div className={classes.container}>
          {palettes}
        </div>
      </>
    )
  }

  return (
    <>
      {renderPalettes(primaryColors, 'primary')}
      {renderPalettes(secondaryColors, 'secondary')}
      {renderPalettes(systemColors, 'system')}
    </>
  )
}

export const Default = Template.bind({})
