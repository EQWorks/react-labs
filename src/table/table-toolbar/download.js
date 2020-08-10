import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Badge from '@material-ui/core/Badge'
import SaveAltIcon from '@material-ui/icons/SaveAlt'

import { DynamicButton } from '../../index'


const saveData = ({ data, rows, allColumns, visibleColumns, visCols = false, filteredRows = false }) => {
  const cols = (visCols && visibleColumns.length > 0) ? visibleColumns : allColumns
  const headers = cols.map((c) => c.render('Header'))
  const valueKeys = cols.map((c) => c.id)

  let csvContent = ''

  headers.forEach((h) => {
    csvContent += `"${String(h).replace(/"/g, '""')}",`
  })
  csvContent = csvContent.slice(0, -1)
  csvContent += '\r\n'

  ;(filteredRows ? rows.map((r) => r.values) : data).forEach((d) => {
    valueKeys.forEach((x) => {
      csvContent += `"${String(d[x]).replace(/"/g, '""')}",`
    })
    csvContent = csvContent.slice(0, -1)
    csvContent += '\r\n'
  })

  const url = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'data.csv')
  document.body.appendChild(link)

  link.click()
  link.remove()
}

const Download = ({ data, allColumns, visibleColumns, rows }) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const allowVisCols = 0 < visibleColumns.length && visibleColumns.length < allColumns.length
  const allowFilteredRows = 0 < rows.length && rows.length < data.length
  const allowOptions = allowVisCols || allowFilteredRows

  const handleDownload = ({ visCols = false, filteredRows = false }) => (e) => {
    e.stopPropagation()
    saveData({ data, rows, allColumns, visibleColumns, visCols, filteredRows })
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const allText = () => {
    if (allowVisCols && !allowFilteredRows) {
      return 'All columns'
    }
    if (!allowVisCols && allowFilteredRows) {
      return 'All rows'
    }
    return 'All columns and rows'
  }

  if (!data.length || !(allColumns || []).length) {
    return null
  }

  return (
    <>
      <div ref={anchorRef} aria-label='Save DynamicButton'>
        <DynamicButton
          type='tertiary'
          endIcon={
            <Badge color='secondary' variant='dot' invisible={!allowOptions}>
              <SaveAltIcon fontSize='small' />
            </Badge>
          }
          onClick={allowOptions ? handleToggle : handleDownload({ visCols: false, filteredRows: false })}
          aria-haspopup='menu'
        >
          Download
        </DynamicButton>
      </div>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleDownload({ visCols: false, filteredRows: false })}>
                    {allText()}
                  </MenuItem>
                  {allowVisCols && allowFilteredRows && (
                    <MenuItem onClick={handleDownload({ visCols: true, filteredRows: true })}>
                      Visible columns and filtered rows
                    </MenuItem>
                  )}
                  {allowVisCols && (
                    <MenuItem onClick={handleDownload({ visCols: true, filteredRows: false })}>
                      Visible columns
                    </MenuItem>
                  )}
                  {allowFilteredRows && (
                    <MenuItem onClick={handleDownload({ visCols: false, filteredRows: true })}>
                      Filtered rows
                    </MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

Download.propTypes = {
  data: PropTypes.array,
  allColumns: PropTypes.array,
  visibleColumns: PropTypes.array,
  rows: PropTypes.array,
}
Download.defaultProps = {
  data: [],
  allColumns: null,
  visibleColumns: [],
  rows: [],
}

export default Download
