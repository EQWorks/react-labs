import React, { useState } from 'react'
import axios from 'axios'

import { RefetchData, Typography } from '../src/index'

export default {
  title: 'Lab/Refetch Data',
  component: RefetchData,
  args: {},
  argTypes: {
    fetchDataFunction: {
      control: null,
    },
  },
}

export const Default = () => {
  const [fetchedData, setFetchedData] = useState(false)
  const [fetchStatus, setFetchStatus] = useState('none')
  const [lastUpdated, setLastUpdated] = useState(undefined)

  const fetchData = async () => {
    setFetchStatus('loading')
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      window.setTimeout(() => {
        setFetchStatus('none')
        setLastUpdated(new Date(Date.now()))
        setFetchedData(data)
      }, 1000)
    } catch (error) {
      console.log(error)
      setFetchStatus('error')
    }
  }

  return (
    <>
      <RefetchData
        status={fetchStatus}
        fetchDataFunction={fetchData}
        lastUpdated={lastUpdated}
      />
      {(fetchedData) && (
        <div>
          <Typography variant='body1'>Name: {fetchedData.name}</Typography>
          <Typography variant='body1'>Email: {fetchedData.email}</Typography>
        </div>
      )}
    </>
  )
}

Default.parameters = {
  controls: { hideNoControlsWarning: true },
}

// ===

export const Success = () => {
  const [fetchStatus, setFetchStatus] = useState('none')
  const [lastUpdated, setLastUpdated] = useState(undefined)

  const fetchData = async () => {
    setFetchStatus('loading')
    window.setTimeout(() => {
      setFetchStatus('none')
    }, 1000)
  }

  return <RefetchData status={fetchStatus} fetchDataFunction={fetchData} />
}

Success.parameters = {
  controls: { hideNoControlsWarning: true },
}


// ===

export const Error = () => {
  const [fetchStatus, setFetchStatus] = useState('none')

  const fetchData = async () => {
    setFetchStatus('loading')
    window.setTimeout(() => {
      setFetchStatus('error')
    }, 1000)
  }

  return <RefetchData status={fetchStatus} fetchDataFunction={fetchData} />
}

Error.parameters = {
  controls: { hideNoControlsWarning: true },
}
