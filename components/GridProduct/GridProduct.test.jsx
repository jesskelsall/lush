import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { gridProductStub } from '../../_stubs'
import GridProduct from './GridProduct'

afterEach(cleanup)

const renderGridProduct = (product) => render(
  <GridProduct product={product} />,
)

const expectedValues = {
  thumbnail: 'Big Blue',
  name: 'Big Blue',
  category: 'Bath Bombs',
  price: '£ 3.95',
  rating: '4.1',
}

describe('GridProduct component', () => {
  // All of the elements are rendering correctly
  describe('Full details', () => {
    it('renders the product thumbnail', () => {
      const screen = renderGridProduct(gridProductStub)
      expect(screen.getByAltText(expectedValues.thumbnail)).toBeVisible()
    })

    it('renders the product name', () => {
      const screen = renderGridProduct(gridProductStub)
      expect(screen.getByText(expectedValues.name)).toBeVisible()
    })

    it('renders the product category', () => {
      const screen = renderGridProduct(gridProductStub)
      expect(screen.getByText(expectedValues.category)).toBeVisible()
    })

    it('renders the product price', () => {
      const screen = renderGridProduct(gridProductStub)
      expect(screen.getByText(expectedValues.price)).toBeVisible()
    })

    it('renders the product rating', () => {
      const screen = renderGridProduct(gridProductStub)
      expect(screen.getByText(expectedValues.rating)).toBeVisible()
    })
  })

  // The component isn't throwing errors when optional properties are null
  describe('Partial details', () => {
    it('renders without the product thumbnail', () => {
      const product = { ...gridProductStub }
      delete product.node.thumbnail

      const screen = renderGridProduct(product)
      expect(screen.queryByAltText(expectedValues.thumbnail)).not.toBeInTheDocument()
    })

    it('renders without the product category', () => {
      const product = { ...gridProductStub }
      delete product.node.category

      const screen = renderGridProduct(gridProductStub)
      expect(screen.queryByText(expectedValues.category)).not.toBeInTheDocument()
    })

    it('renders without the product price', () => {
      const product = { ...gridProductStub }
      delete product.node.pricing

      const screen = renderGridProduct(gridProductStub)
      expect(screen.queryByText(expectedValues.price)).not.toBeInTheDocument()
    })

    it('renders without the product rating', () => {
      const product = { ...gridProductStub }
      delete product.node.rating

      const screen = renderGridProduct(gridProductStub)
      expect(screen.queryByText(expectedValues.rating)).not.toBeInTheDocument()
    })
  })
})
