import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import PropTypes from 'prop-types'
import axios from 'axios'
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

const RefetchData = ({ fetchUrl }) => {
  const [isFetchingData, setIsFetchingData] = useState(false)
  const classes = useStyles()
  const { refetch, status } = useQuery('data', async () => {
    setIsFetchingData(true)
    const { data } = await axios.get(fetchUrl)
    setIsFetchingData(false)
    console.log(data)
    return data
  })

  return (
    <div>
      {(isFetchingData) && (
        <Alert
          className={classes.alert}
          message="Loading data..."
          severity="info"
          variant="standard"
          width="100%"
        />
      )}
      {(status === 'error') && (
        <Alert
          className={classes.alert}
          message="Error loading data."
          severity="error"
          variant="standard"
          width="100%"
        />
      )}
      <div className={classes.container}>
        <button className={classes.button} onClick={() => refetch()}><RefreshIcon /></button>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

RefetchData.propTypes = {
  /**
    * The API URL that uses a GET request to return JSON formatted data.
  */
  fetchUrl: PropTypes.string.isRequired,
}

export default RefetchData
