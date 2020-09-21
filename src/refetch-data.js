import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
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
      justifyContent: 'center',
      padding: '5px',
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary[900],
      border: 'none',
      borderRadius: '100%',
      cursor: 'pointer',
      display: 'inline-flex',
      height: '50px',
      justifyContent: 'center',
      transition: 'background-color 0.25s ease-out',
      width: '50px',
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
      '&:disabled': {
        backgroundColor: theme.palette.secondary[500],
        cursor: 'default',
      },
      '& svg': {
        color: theme.palette.common.white,
        outline: 'none',
      },
    },
  }
})

const RefetchData = ({ fetchDataFunction, status, lastUpdated }) => {
  const [hideAlert, setHideAlert] = useState(false)
  const [open, setOpen] = useState(false)
  const [lastUpdatedDisplay, setLastUpdatedDisplay] = useState(false)
  const buttonRef = useRef()
  const classes = useStyles()

  useEffect(() => {
    displayLastUpdated()

    const hideAlertTimer = setTimeout(() => {
      if (status === 'error') {
        setHideAlert(true)
      }
    }, 2000)

    const updateLastUpdatedTimer = setInterval(() => {
      displayLastUpdated()
    }, 60 * 1000)

    return () => {
      setHideAlert(false)
      clearTimeout(hideAlertTimer)
      clearInterval(updateLastUpdatedTimer)
    }
  }, [status, lastUpdated])

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

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    if (lastUpdatedDisplay) {
      setOpen(true)
    }
  }

  const displayLastUpdated = () => {
    if (lastUpdated) {
      const startTime = lastUpdated
      const currentTime = new Date(Date.now())
      const timeDifference = currentTime.getTime() - startTime.getTime()
      const resultInMinutes = Math.round(timeDifference / 60000)
      if (resultInMinutes < 1) {
        setLastUpdatedDisplay('Updated just now')
      } else if (resultInMinutes < 60) {
        setLastUpdatedDisplay(`Updated ${resultInMinutes} mins ago`)
      } else {
        setLastUpdatedDisplay('Updated more than an hour ago')
      }
    }
  }

  return (
    <>
      {(status === 'loading') && (
        <Alert
          className={classes.alert}
          message="Loading data..."
          severity="info"
          variant="standard"
          width="100%"
        />
      )}
      {(status === 'loading') && (
        <Alert
          className={classes.alert}
          message="Error loading data."
          severity="error"
          variant="standard"
          width="100%"
        />
      )}
      <div className={classes.container} tabIndex='-1'>
        <Tooltip
          aria-label={lastUpdatedDisplay}
          arrow
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          title={lastUpdatedDisplay}
        >
          <button
            aria-label='Refresh data'
            className={classes.button}
            disabled={(status === 'loading')}
            onKeyDown={handleKey}
            onMouseUp={handleClick}
            ref={buttonRef}
          >
            <RefreshIcon tabIndex='-1' />
          </button>
        </Tooltip>
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
  /**
    * The date and time of the most recent return of data.
  */
  lastUpdated: PropTypes.instanceOf(Date),
}

export default RefetchData
