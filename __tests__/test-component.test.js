import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TestEvents from '../src/test-component'

it('Render is OK', () => {
  const { baseElement } = render(<TestEvents />)

  expect(baseElement).toBeTruthy()
})

it('increments counter', () => {
  const { getByTestId } = render(<TestEvents />)

  fireEvent.click(getByTestId('button-up'))

  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements counter', () => {
  const { getByTestId } = render(<TestEvents />)

  fireEvent.click(getByTestId('button-down'))

  expect(getByTestId('counter')).toHaveTextContent('-1')
})
