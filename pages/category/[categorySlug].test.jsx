import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { categoryStub } from '../../_stubs'
import CategoryPage from './[categorySlug]'

afterEach(cleanup)

const renderCategoryPage = () => render(
  <CategoryPage
    categorySlug="bath-bombs"
    description={categoryStub.data.category.description}
    name={categoryStub.data.category.name}
    pageInfo={categoryStub.data.category.products.pageInfo}
    products={categoryStub.data.category.products.edges}
  />,
)

describe('Category page', () => {
  it('renders the category name', () => {
    const screen = renderCategoryPage()
    const heading = screen.container.querySelector('h1')

    expect(heading.innerHTML).toBe('Bath Bombs')
  })

  it('renders the category description', () => {
    const screen = renderCategoryPage()

    expect(screen.getByText('Claudia Hammond - The Art of Rest')).toBeVisible()
  })

  it('renders a list of products', () => {
    const screen = renderCategoryPage()

    categoryStub.data.category.products.edges.forEach((product) => {
      expect(screen.getByText(product.node.name)).toBeVisible()
    })
  })
})
