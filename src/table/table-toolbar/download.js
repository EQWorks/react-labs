import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import SaveAltIcon from '@material-ui/icons/SaveAlt'

import Button from '../../dynamic-button'


const saveData = ({ data, allColumns, visibleColumns, saveVisible = false }) => {
  const cols = (saveVisible && visibleColumns.length > 0) ? visibleColumns : allColumns
  const headers = cols.map((c) => c.render('Header'))
  const valueKeys = cols.map((c) => c.id)

  let csvContent = ''

  headers.forEach((h) => {
    csvContent += `"${String(h).replace(/"/g, '""')}",`
  })
  csvContent = csvContent.slice(0, -1)
  csvContent += '\r\n'

  data.forEach((d) => {
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

const Download = ({ data, allColumns, visibleColumns }) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const allowOptions = 0 < visibleColumns.length && visibleColumns.length < allColumns.length

  const handleClick = (saveVisible = false) => (e) => {
    e.stopPropagation()
    saveData({ data, allColumns, visibleColumns, saveVisible })
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

  if (!data.length || !(allColumns || []).length) {
    return null
  }

  return (
    <>
      <div ref={anchorRef} aria-label='Save button'>
        <Button
          type='tertiary'
          endIcon={<SaveAltIcon />}
          onClick={allowOptions ? handleToggle : handleClick(false)}
          aria-haspopup='menu'
        >
          Download
        </Button>
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
                  <MenuItem onClick={handleClick(false)}>
                    Include all columns
                  </MenuItem>
                  <MenuItem onClick={handleClick(true)}>
                    Include only visible columns
                  </MenuItem>
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
}
Download.defaultProps = {
  data: [],
  allColumns: null,
  visibleColumns: [],
}

export default Download
