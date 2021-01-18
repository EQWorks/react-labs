import React, { forwardRef } from 'react'

const withRef = (Component) => {
  const componentWithRef = (props, ref) => (<Component forwardRef={ref} {...props}/>)
  return forwardRef(componentWithRef)
}

export default withRef
