import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { categoriesStub } from '../../_stubs/categories'
import Categories from './Categories'

const { edges } = categoriesStub.data.categories

afterEach(cleanup)

const renderCategories = () => render(
  <Categories categories={edges} />,
)

describe('Categories component', () => {
  it('renders each category as a link', () => {
    const screen = renderCategories()

    edges.forEach((category) => {
      const textElement = screen.getByText(category.node.name)

      expect(textElement).toBeVisible()
      expect(textElement.closest('a')).toHaveAttribute('href', `/category/${category.node.slug}`)
    })
  })
})
