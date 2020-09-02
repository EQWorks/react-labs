import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TestEvents from '../src/test-component'

it('Button renders ok', () => {
  const { baseElement } = render(<TestEvents />)

  expect(baseElement).toBeTruthy()
})

it('Button size props renders ok', () => {
  const { getByTestId } = render(<TestEvents />)

  fireEvent.click(getByTestId('button-up'))

  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements counter', () => {
  const { getByTestId } = render(<TestEvents />)

  fireEvent.click(getByTestId('button-down'))

  expect(getByTestId('counter')).toHaveTextContent('-1')
})
