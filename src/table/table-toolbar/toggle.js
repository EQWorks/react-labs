import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Checkbox from '@material-ui/core/Checkbox'
import FilterListIcon from '@material-ui/icons/FilterList'

import Button from '../../dynamic-button'


const Toggle = ({ allColumns, toggleHideColumn }) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  if (!(allColumns || []).length) {
    return null
  }

  return (
    <>
      <div aria-label='Filter button' ref={anchorRef}>
        <Button
          type='tertiary'
          endIcon={<FilterListIcon />}
          onClick={handleToggle}
          aria-haspopup='menu'
        >
          Filter columns
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
                <List>
                  {allColumns.map((c) => {
                    const labelID = `toggle-label-${c.id}`
                    return (
                      <ListItem
                        key={c.id}
                        role={undefined}
                        dense
                        button
                        disabled={c.noToggle}
                        onClick={() => { toggleHideColumn(c.id) }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            color='primary'
                            edge='start'
                            checked={c.isVisible}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelID }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelID} primary={c.Header} />
                      </ListItem>
                    )
                  })}
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

Toggle.propTypes = {
  allColumns: PropTypes.array,
  toggleHideColumn: PropTypes.func,
}
Toggle.defaultProps = {
  allColumns: [],
  toggleHideColumn: () => {},
}

export default Toggle
