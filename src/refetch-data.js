import React, { useEffect, useRef, useState } from 'react'
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
      '&:active': {
        backgroundColor: theme.palette.secondary[500],
      },
      '&:focus': {
        backgroundColor: theme.palette.secondary[500],
        border: `2px solid ${theme.palette.primary.main}`,
        outline: 'none',
      },
      '&:hover': {
        backgroundColor: theme.palette.secondary[700],
      },
      '& svg': {
        color: theme.palette.common.white,
        outline: 'none',
      },
    },
  }
})

const RefetchData = ({ fetchDataFunction, status }) => {
  const [hideAlert, setHideAlert] = useState(false)
  const buttonRef = useRef()
  const classes = useStyles()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'error') {
        setHideAlert(true)
      }
    }, 2000)
    return () => {
      setHideAlert(false)
      clearTimeout(timer)
    }
  }, [status])

  const handleClick = () => {
    fetchDataFunction()
    buttonRef.current.blur()
  }

  const handleKey = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      fetchDataFunction()
    } else {
      buttonRef.current.blur()
    }
  }

  return (
    <>
      {(status === 'error' && !hideAlert) && (
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
      <div className={classes.container} tabIndex='-1'>
        <button
          aria-label='Refresh data'
          className={classes.button}
          onKeyDown={handleKey}
          onMouseUp={handleClick}
          ref={buttonRef}
        >
          <RefreshIcon tabIndex='-1' />
        </button>
      </div>
    </>
  )
}

RefetchData.propTypes = {
  /**
    * The request status.
  */
  status: PropTypes.oneOf(['error', 'loading', 'none']),
  /**
    * The request method.
  */
  fetchDataFunction: PropTypes.func,
}

export default RefetchData
