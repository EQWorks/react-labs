import React from 'react'
import { render } from '@testing-library/react'

import Button from '../src/button'

describe('#Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>My Button</Button>)
  
    expect(baseElement).toBeTruthy()
  })
  
  it('should still render successfully due to improper "type" prop', () => {
    const { baseElement, getByTestId } = render(<Button type={'error'}>My Button</Button>)
  
    expect(baseElement).toBeTruthy()
    expect(getByTestId('button')).toHaveAttribute('type', 'primary')
  })
})
