import { useState, useEffect, useRef } from 'react'


export const useMenuIsOpen = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const ref = useRef(null)

  const outOfComponentClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setMenuIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', outOfComponentClick)
    return () => document.removeEventListener('click', outOfComponentClick)
  })

  return { ref, menuIsOpen, setMenuIsOpen }
}
