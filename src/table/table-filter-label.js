import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import ButtonBase from '@material-ui/core/ButtonBase'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import FilterListIcon from '@material-ui/icons/FilterList'
import { makeStyles } from '@material-ui/core/styles'

import DefaultFilter from './filters/default-filter'


const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  filter: {
    padding: '1rem',
  },
}))

const TableFilterLabel = ({ column }) => {
  const classes = useStyles()
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleClose = (e) => {
    console.log('lol')
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <ButtonBase
        aria-label='Edit button'
        ref={anchorRef}
        disableRipple
        className={classes.root}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((prev) => !prev)
        }}
      >
        <FilterListIcon color={column.filterValue ? 'inherit' : 'disabled'} />
      </ButtonBase>
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
                <div className={classes.filter}>
                  {column.Filter ? (
                    column.render('Filter')
                  ) : (
                    <DefaultFilter {...column} />
                  )}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

TableFilterLabel.propTypes = {
  column: PropTypes.object.isRequired,
}

export default TableFilterLabel
