import React from 'react'
import { screen, render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  render(<App />)
  test('text match - regex and custom function', () => {
    const textMatchElement = screen.getByText('Hello World')
    expect(textMatchElement).toBeInTheDocument()

    // Error
    // const textMatchElement1 = screen.getByText(/world/)
    // expect(textMatchElement1).toBeInTheDocument()

    const textMatchElement1 = screen.getByText(/World/)
    expect(textMatchElement1).toBeInTheDocument()

    const textMatchElement2 = screen.getByText(/world/i)
    expect(textMatchElement2).toBeInTheDocument()

    const textMatchElement3 = screen.getByText(/^hello world$/i)
    expect(textMatchElement3).toBeInTheDocument()

    // (content?: string, element?: Element | null) => boolean
    const customFunctionElement = screen.getByText((content) =>
      content.startsWith('Hello')
    )

    expect(customFunctionElement).toBeInTheDocument()
  })
})
