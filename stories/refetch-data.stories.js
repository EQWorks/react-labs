import React from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import RefreshIcon from '@material-ui/icons/Refresh'

// import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => {
  return {
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

const RefetchData = () => {
  // const [intervalMs] = useState(300000) // 5 minutes
  // const cache = useQueryCache()
  const classes = useStyles()
  const { data, error, refetch, status } = useQuery('data', async () => {
    const { data } = await axios.get(
      'https://api.github.com/repos/tannerlinsley/react-query',
    )
    console.log(data)
    return data
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <div>
      <h1>Test hook</h1>
      <div className={classes.container}>
        <button className={classes.button} onClick={() => refetch()}><RefreshIcon /></button>
      </div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

export default {
  title: 'Lab/Refetch Data',
  component: RefetchData,
  args: {},
  argTypes: {},
}

export const Default = RefetchData
