import React from 'react'
import PropTypes from 'prop-types'

import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

import TreeMenu from './tree-menu'
import ListMenu from './list-menu'
import { useMenuIsOpen, useMenuChange } from './hooks'


const TextField = withStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    'label + &': {
      marginTop: theme.spacing(0.5),
    },
    borderRadius: 2,
    border: `1px solid ${grey[300]}`,
    fontSize: theme.typography.body1,
    padding: '4px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  focused: {
    boxShadow: `${fade(theme.palette.primary[100], 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  label: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1.2),
    color: theme.palette.primary.main,
  },
  input: { width: '95%' },
  inputFilled: { backgroundColor: '#F3FAFF', borderColor: theme.palette.primary.main },
  inputFocus: {
    width: '95%',
    boxShadow: `${fade(theme.palette.primary[100], 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
  menuPaper: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    position: 'fixed',
    display: 'flex',
    zIndex: 10,
  },
  listPaper: {
    width: '95%',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    zIndex: 10,
  },
}))

const Tree = (props) => {
  const classes = useStyles()
  const { label, menuOptions } = props
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()
  const {
    state: { search, value, placeholder, listMenuOptions, selectedNodes },
    handlers: { setSearch, handleInputClick, onMenuChange, handleSearchClick },
  } = useMenuChange({ ...props, menuIsOpen, setMenuIsOpen })

  return (
    <FormControl>
      {label && <Typography variant='caption' className={classes.label}>{label}</Typography>}
      <div ref={ref}>
        <TextField
          color='primary'
          value={search || value}
          placeholder={placeholder}
          onClick={handleInputClick}
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={menuIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          className={menuIsOpen ? classes.inputFocus : classes.input}
          classes={{ root: (!menuIsOpen && value) ? classes.inputFilled : null }}
        />
        {menuIsOpen && !listMenuOptions.length && <Paper elevation={3} classes={{ root: classes.menuPaper }}>
          <TreeMenu menuOptions={menuOptions} onMenuChange={onMenuChange} selectedNodes={selectedNodes} />
        </Paper>}
        {(menuIsOpen && listMenuOptions.length) ? (<Paper elevation={3} classes={{ root: classes.listPaper }}>
          <ListMenu options={listMenuOptions} onClick={handleSearchClick} />
        </Paper>) : null}
      </div>
    </FormControl>
  )
}

Tree.propTypes = {
  label: PropTypes.string,
  menuOptions: PropTypes.array.isRequired,
  onSearchMenuChange: PropTypes.func,
}
Tree.defaultProps = {
  label: '',
  onSearchMenuChange: () => {},
}

export default Tree
