import React from 'react'
import Counter from './counter'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'

const setInfo = () => {
  const view = render(<Counter />)
  return [view]
}

describe('Counter', () => {
  it('renders correctly', () => {
    setInfo()
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  it('renders a count of 0', () => {
    setInfo()
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  it('renders a count of 1 after clicking the increment button', async () => {
    setInfo()
    user.setup()
    // Convenience APIs click() , dblClick(), tripleClick(), hover(), unhover(),
    // Pointer APIs pointer({keys: '[MouseLeft]'}),
    // Pointer APIs pointer({keys: '[MouseLeft][Mouseright]'}),
    // Pointer APIs pointer('[MouseLeft][Mouseright]'),
    // Pointer APIs pointer('[MouseLeft]'),
    // Pointer APIs pointer('[/MouseLeft]'),
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  it('renders a count of 2 after clicking the increment button', async () => {
    setInfo()
    user.setup()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.dblClick(incrementButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  it('renders a count of 10 after clicking the set button', async () => {
    setInfo()
    user.setup()

    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  // Keyboard Interactions
  // Utility API
  // type()

  // clear()
  it('clear', async () => {
    render(<textarea defaultValue={'Hello'} />)
    user.setup()
    const textareaValue = screen.getByRole('textbox')
    await user.clear(textareaValue)
    expect(textareaValue).toHaveValue('')
  })

  // deselectOptions()
  // selectOptions()
  test('select options', async () => {
    user.setup()
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    )
    await user.selectOptions(screen.getByRole('listbox'), ['1', 'C'])
    expect(screen.getByRole('option', { name: 'A' }).selected).toBe(true)
    expect(screen.getByRole('option', { name: 'B' }).selected).toBe(false)
    expect(screen.getByRole('option', { name: 'C' }).selected).toBe(true)
  })

  // upload()
  test('upload file', async () => {
    user.setup()
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input type="file" id={'file-uploader'} />
      </div>
    )
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const input = screen.getByLabelText(/upload file/i)

    await user.upload(input, file)
    expect(input.files[0]).toBe(file)
    expect(input.files.item(0)).toBe(file)
    expect(input.files).toHaveLength(1)
  })

  // Convenience API
  // tab()
  it('elements are focused in the right order', async () => {
    setInfo()
    user.setup()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })

    await user.tab()
    expect(incrementButton).toHaveFocus()

    await user.tab()
    expect(amountInput).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })

  // Clipboard APIs
  // copy()
  // cut()
  // paste()
})
