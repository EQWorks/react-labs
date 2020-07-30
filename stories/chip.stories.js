import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from '@material-ui/core/Chip'


const useStyles = makeStyles(theme => ({
  test: {
    color: theme.palette.primary.main
  }
}))

export default {
  component: Chip,
  title: 'Chip'
}

export const Default = (theme) => {
  const classes = useStyles()
  console.log(theme)

  return <Chip className={classes.test} label='Basic' />
}

