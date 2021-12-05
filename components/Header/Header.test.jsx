import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import Header from './Header'

afterEach(cleanup)

const renderHeader = () => render(<Header />)

describe('Header component', () => {
  it('renders the project title as a link to the home page', () => {
    const screen = renderHeader()
    const title = screen.getByText('Lush Web Engineer Task: Jessica Kelsall')

    expect(title).toBeVisible()
    expect(title).toHaveAttribute('href', '/')
  })

  it('renders an avatar', () => {
    const screen = renderHeader()

    expect(screen.getByAltText('Jessica Kelsall')).toBeVisible()
  })
})
