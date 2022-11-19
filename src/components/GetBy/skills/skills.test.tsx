import React from 'react'
import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './skills'

// getBy and getAllBy class of queries to assert if elements are present in the DOM.
// queryBy and queryAllBy class of queries to assert if elements are not present in the DOM.

describe('Skills', () => {
  const setUp = () => {
    const skills = ['HTML', 'CSS', 'JavaScript']
    const view = render(<Skills skills={skills} />)
    return { skills, view }
  }

  test('renders correctly', () => {
    setUp()
    const key = 'list'
    const listElement = screen.getByRole(key)
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    const { skills, view } = setUp()
    logRoles(view.container)
    const key = 'listitem'
    const listItemElements = screen.getAllByRole(key)
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    setUp()

    const buttonElement = screen.getByRole('button', {
      name: 'Login',
    })
    expect(buttonElement).toBeInTheDocument()
  })

  test('Start learning button is not rendered', () => {
    setUp()

    // const buttonElement = screen.getByRole('button',{
    //     name: /^start learning$/i
    // })

    // queryBy
    // *. Return the matching node for a query, and return null if no elements match.
    // **. Useful for asserting an element that is not present.
    // ***. Throws an error if more than one match is found.

    // queryAllBy
    // *. Returns an array if all matching nodes for a query, and return an empty array if no elements match.

    const buttonElement = screen.queryByRole('button', {
      name: /^start learning$/i,
    })

    expect(buttonElement).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    setUp()
    // const startLearningButton = screen.getByRole('button', {
    //     name: 'Start Learning'
    // })

    // findBy
    // 1. Returns a Promise which resolves when an element is found which matches the given query.
    // 2. The promise is rejected if no element is found or more than one element is found after a default of 1000ms.

    // findAllBy
    // 1. Returns a promise which resolves to an array of elements when any elements are found which match the given query.
    // 2. The promise is rejected if no elements are found after a default timeout of 1000ms.

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
