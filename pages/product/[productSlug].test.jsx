import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { productStub } from '../../_stubs'
import ProductPage from './[productSlug]'

afterEach(cleanup)

const defaultProduct = productStub.data.product

const renderProductPage = (product = defaultProduct) => render(
  <ProductPage {...product} />,
)

const expectedValues = {
  category: 'Soap',
  collections: ['Bath', 'Shower'],
  description: 'How to use:',
  name: '13 Soap Unlucky for Dirt',
  price: '£ 6.00',
  rating: '5.0',
  weight: '120g',
}

describe('Product page', () => {
  // All of the elements are rendering correctly
  describe('Full details', () => {
    it('renders the product name', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.name)).toBeVisible()
    })

    it('renders the product category', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.category)).toBeVisible()
    })

    it('renders the product rating', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.rating)).toBeVisible()
    })

    it('renders the product price', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.price)).toBeVisible()
    })

    it('renders the product weight', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.weight)).toBeVisible()
    })

    it('renders the product collections', () => {
      const screen = renderProductPage()

      expectedValues.collections.forEach((collection) => {
        expect(screen.getByText(collection)).toBeVisible()
      })
    })

    it('renders the product description', () => {
      const screen = renderProductPage()
      expect(screen.getByText(expectedValues.description)).toBeVisible()
    })
  })

  // The component isn't throwing errors when optional properties are null
  describe('Partial details', () => {
    it('renders without the product category', () => {
      const product = { ...defaultProduct }
      delete product.category

      const screen = renderProductPage(product)
      expect(screen.queryByText(expectedValues.category)).not.toBeInTheDocument()
    })

    it('renders without the product rating', () => {
      const product = { ...defaultProduct }
      delete product.rating

      const screen = renderProductPage(product)
      expect(screen.queryByText(expectedValues.rating)).not.toBeInTheDocument()
    })

    it('renders without the product price', () => {
      const product = { ...defaultProduct }
      delete product.pricing

      const screen = renderProductPage(product)
      expect(screen.queryByText(expectedValues.price)).not.toBeInTheDocument()
    })

    it('renders without the product weight', () => {
      const product = { ...defaultProduct }
      delete product.weight

      const screen = renderProductPage(product)
      expect(screen.queryByText(expectedValues.weight)).not.toBeInTheDocument()
    })

    it('renders without the product collections', () => {
      const product = { ...defaultProduct }
      delete product.collections

      const screen = renderProductPage(product)
      expectedValues.collections.forEach((collection) => {
        expect(screen.queryByText(collection)).not.toBeInTheDocument()
      })
    })

    it('renders without the product description', () => {
      const product = { ...defaultProduct }
      delete product.description

      const screen = renderProductPage(product)
      expect(screen.queryByText(expectedValues.description)).not.toBeInTheDocument()
    })
  })
})
