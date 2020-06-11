import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import SaveIcon from '@material-ui/icons/Save'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'



const saveData = ({ data, columns, visibleColumns, saveVisible = false }) => {
  const cols = (saveVisible && visibleColumns.length > 0) ? visibleColumns : columns
  const headers = cols.map((c) => c.Header)
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

const options = ['Save all columns', 'Save only visible columns']

const Download = ({ data, columns, visibleColumns }) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (e) => {
    e.stopPropagation()
    saveData({ data, columns, visibleColumns, saveVisible })
  }

  const handleMenuItemClick = (_, index) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const allowOptions = visibleColumns.length < columns.length && visibleColumns.length > 0
  const saveVisible = selectedIndex > 0 && visibleColumns.length !== columns.length

  if (!data.length || !(columns || []).length) {
    return null
  }
  return (
    <>
      <ButtonGroup ref={anchorRef} size='small' aria-label='Save button'>
        <Button startIcon={<SaveIcon />} onClick={handleClick}>
          {allowOptions ? options[selectedIndex] : 'Save'}
        </Button>
        {allowOptions && (
          <Button
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label='select save option'
            aria-haspopup='menu'
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        )}
      </ButtonGroup>
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
                <MenuList id='split-button-menu'>
                  {options.map((option, i) => (
                    <MenuItem
                      key={option}
                      selected={i === selectedIndex}
                      onClick={(e) => handleMenuItemClick(e, i)}
                    >
                      {option}
                    </MenuItem>
                  ))}
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
  columns: PropTypes.array,
  visibleColumns: PropTypes.array,
}
Download.defaultProps = {
  data: [],
  columns: null,
  visibleColumns: [],
}

export default Download
