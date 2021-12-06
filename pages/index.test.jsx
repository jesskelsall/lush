import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { categoriesStub } from '../_stubs'
import HomePage from './index'

afterEach(cleanup)

const renderHomePage = () => render(
  <HomePage categories={categoriesStub.data.categories.edges} />,
)

describe('Home page', () => {
  it('renders the welcome message', () => {
    const screen = renderHomePage()

    expect(screen.getByText('Hello!')).toBeVisible()
    expect(screen.getByText('Select a category to start browsing products.')).toBeVisible()
  })

  it('renders categories', () => {
    const screen = renderHomePage()

    categoriesStub.data.categories.edges.forEach((category) => {
      expect(screen.getByText(category.node.name)).toBeVisible()
    })
  })
})
