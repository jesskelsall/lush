import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import Pagination from './Pagination'

const defaultProps = {
  baseUrl: '/category/bath-bombs',
  pageInfo: {
    endCursor: '987',
    hasNextPage: true,
    hasPreviousPage: true,
    startCursor: '123',
  },
}

const buttonText = {
  previous: '\u2190 Previous',
  next: 'Next \u2192',
}

afterEach(cleanup)

const renderPagination = (props) => render(<Pagination {...props} />)

describe('Pagination component', () => {
  it('renders a previous and next button', () => {
    const screen = renderPagination(defaultProps)

    expect(screen.getByText(buttonText.previous)).toBeVisible()
    expect(screen.getByText(buttonText.next)).toBeVisible()
  })

  it('renders a link to the previous page', () => {
    const screen = renderPagination(defaultProps)

    const previous = screen.getByText(buttonText.previous)
    expect(previous).toHaveAttribute('href', '/category/bath-bombs?before=123')
  })

  it('renders a link to the next page', () => {
    const screen = renderPagination(defaultProps)

    const next = screen.getByText(buttonText.next)
    expect(next).toHaveAttribute('href', '/category/bath-bombs?after=987')
  })

  it('renders no link when there is no previous page', () => {
    const props = defaultProps
    props.pageInfo.hasPreviousPage = false
    const screen = renderPagination(props)

    const previous = screen.getByText(buttonText.previous)
    expect(previous).not.toHaveAttribute('href')
  })

  it('renders no link when there is no next page', () => {
    const props = defaultProps
    props.pageInfo.hasNextPage = false
    const screen = renderPagination(props)

    const next = screen.getByText(buttonText.next)
    expect(next).not.toHaveAttribute('href')
  })
})
