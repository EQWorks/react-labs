import React, { useState } from 'react'
import axios from 'axios'

import { RefetchData } from '../src/index'

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
  const [fetchStatus, setFetchStatus] = useState('none')
  const [lastUpdated, setLastUpdated] = useState(undefined)

  const fetchData = async () => {
    setFetchStatus('loading')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    window.setTimeout(() => {
      setFetchStatus('none')
      setLastUpdated(new Date(Date.now()))
      console.log(data)
      return data
    }, 1000)
  }

  if (status === 'error') {
    setFetchStatus('error')
  }

  return <RefetchData
    status={fetchStatus}
    fetchDataFunction={fetchData}
    lastUpdated={lastUpdated}
  />
}

Default.parameters = {
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
