import React from 'react'
import Application from './application'
import { render, screen } from '@testing-library/react'

describe('Application', () => {
  render(<Application />)

  describe('get by role', function () {
    // getByRole Options : name, level, hidden, selected, checked, passed
    test('renders correctly', () => {
      const pageHeading = screen.getByRole('heading', {
        name: 'Job application form',
        level: 1,
      })
      expect(pageHeading).toBeInTheDocument()

      const sectionHeading = screen.getByRole('heading', {
        name: 'Section 1',
        level: 2,
      })
      expect(sectionHeading).toBeInTheDocument()

      const nameElement = screen.getByRole('textbox', {
        name: 'Name',
      })
      expect(nameElement).toBeInTheDocument()

      const bioElement = screen.getByRole('textbox', {
        name: 'Bio',
      })
      expect(bioElement).toBeInTheDocument()

      const jobLocationElement = screen.getByRole('combobox')
      expect(jobLocationElement).toBeInTheDocument()

      const checkboxElement = screen.getByRole('checkbox')
      expect(checkboxElement).toBeInTheDocument()

      const nameElement2 = screen.getByLabelText('Name')
      expect(nameElement2).toBeInTheDocument()

      const termsElement2 = screen.getByLabelText(
        'I agree to the terms and conditions.'
      )
      expect(termsElement2).toBeInTheDocument()

      const nameElement3 = screen.getByDisplayValue('Rasoul')
      expect(nameElement3).toBeInTheDocument()

      const submitButtonElement = screen.getByRole('button')
      expect(submitButtonElement).toBeInTheDocument()
      expect(submitButtonElement).not.toBeEnabled()
      expect(submitButtonElement).toBeDisabled()
    })
  })
})
