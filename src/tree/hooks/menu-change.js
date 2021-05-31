import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { searchedOptions, findNodes } from '../helpers'


export const useMenuChange = ({
  menuOptions,
  defaultValue,
  value: _value,
  placeholder: _placeholder,
  onMenuChange: _onMenuChange,
  onSearchMenuChange,
  menuIsOpen,
  setMenuIsOpen,
}) => {
  const [selectedNodes, setSelectedNodes] = useState([])
  const [listMenuOptions, setListMenuOptions] = useState([])
  const [value, setValue] = useState('')
  const [placeholder, setPlaceholder] = useState(_placeholder)
  const [search, setSearch] = useState('')
  const [_search] = useDebounce(search, 500)

  useEffect(() => {
    if (defaultValue.length) {
      setSelectedNodes(defaultValue)
    }
  }, [defaultValue])

  useEffect(() => {
    if (_value) {
      setValue(`${_value.join(' › ')}`)
    }
  }, [_value])

  useEffect(() => {
    if (_search) {
      setListMenuOptions(searchedOptions(menuOptions, _search))
    }
  }, [menuOptions, _search])

  useEffect(() => {
    if (!menuIsOpen) {
      setSearch('')
      setListMenuOptions([])
      setValue(`${_value.join(' › ')}`)
    }
  }, [menuIsOpen, _value])

  const handleInputClick = () => {
    setMenuIsOpen(true)
    setPlaceholder(value)
    setValue('')
  }

  const onMenuChange = (value) => {
    setSelectedNodes((findNodes(menuOptions, value.id)).map(({ id }) => id))
    _onMenuChange({ ...value })
    if (!value.children.length) {
      setMenuIsOpen(false)
    }
  }

  const handleSearchClick = (option) => {
    onSearchMenuChange({ value: option })
    const [node] = option.slice(-1)
    if (node) {
      onMenuChange(node)
      setSearch('')
      setListMenuOptions([])
    }
  }

  return {
    state: { search, value, placeholder, listMenuOptions, selectedNodes },
    handlers: { setSearch, setValue, setPlaceholder, setSelectedNodes, handleInputClick, onMenuChange, handleSearchClick },
  }
}
