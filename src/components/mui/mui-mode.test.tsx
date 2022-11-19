import React from 'react'
import { render, screen } from '../../test-utils'
import MuiMode from './mui-mode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent(/dark mode/i)
  })
})
