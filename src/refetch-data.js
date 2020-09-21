import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import RefreshIcon from '@material-ui/icons/Refresh'

import { Alert } from '../src/index'

const useStyles = makeStyles((theme) => {
  return {
    alert: {
      left: '50%',
      position: 'absolute',
      top: '0',
      transform: 'translate(-50%, 0)',
    },
    container: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'inline-flex',
      height: '50px',
      justifyContent: 'center',
      padding: '5px',
      width: '50px',
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary[900],
      border: 'none',
      borderRadius: '100%',
      cursor: 'pointer',
      display: 'inline-flex',
      height: '100%',
      justifyContent: 'center',
      transition: 'background-color 0.25s ease-out',
      width: '100%',
      '&:hover': {
        backgroundColor: theme.palette.secondary[700],
      },
      '&:active': {
        backgroundColor: theme.palette.secondary[500],
      },
      '& svg': {
        color: theme.palette.common.white,
      },
    },
  }
})

const RefetchData = ({ status, update }) => {
  const classes = useStyles()

  return (
    <>
      {(status === 'error') && (
        <Alert
          className={classes.alert}
          message='Error loading data.'
          severity='error'
          variant='standard'
          width='100%'
        />
      )}
      {(status === 'loading') && (
        <Alert
          className={classes.alert}
          message='Loading data...'
          severity='info'
          variant='standard'
          width='100%'
        />
      )}
      <div className={classes.container}>
        <button className={classes.button} onClick={update}><RefreshIcon /></button>
      </div>
    </>
  )
}

RefetchData.propTypes = {
  /**
    * The request status.
  */
  status: PropTypes.oneOf(['error', 'loading']),
  /**
    * The request method.
  */
  update: PropTypes.func,
}

export default RefetchData
