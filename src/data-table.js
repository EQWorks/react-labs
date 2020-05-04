import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {Table, TableHead, TableRow, TableBody, TableContainer, TableCell} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
  root: {width: '100%'},
  head: {
    fontSize: 'body',
    fontWeight: 600,
  },
  cell: { flexGrow: 1 },
}))

const nameReplacer = name => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ')
}

const DataTable = ({ data, isPercentage }) => {
  const classes = useStyles()

  const [dynamicData, setDynamicData] = useState(data)
  const [order, setOrder] = useState(false)
  const tableHead = Object.getOwnPropertyNames(data[0] || {})

  const dynamicSort = name => {
    setOrder(!order)
    const sorted = [...dynamicData]
      .sort((a, b) => {
        if(order ? a[name] < b[name] : a[name] > b[name]) {
          return -1
        }
        if(order ? a[name] > b[name] : a[name] < b[name]) {
          return 1
        }
        return 0
      })
    setDynamicData(sorted)
  }

  const headList = tableHead.map((name) => (
    <TableCell
      key={name}
      className={classes.head}
      onClick={()=>dynamicSort(name)}
    >
      {nameReplacer(name)}
    </TableCell>)
  )

  const bodyList = dynamicData.map((row, i) => (
    <TableRow key={i}>
      {Object.values(row).map((column, i) => (
        <TableCell key={i}>{column}{`${isPercentage ? `%` : '' }`}</TableCell>
      ))}
    </TableRow>
  ))

  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader>
        <TableHead >
          <TableRow>{headList}</TableRow>
        </TableHead>
        <TableBody>{bodyList}</TableBody>
      </Table>
    </TableContainer>
  )
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

DataTable.defaultProps = { data: [] }

export default DataTable