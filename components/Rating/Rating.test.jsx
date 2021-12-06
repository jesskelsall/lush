import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import Rating from './Rating'

afterEach(cleanup)

const renderRating = (rating) => render(
  <Rating rating={rating} />,
)

const testStarPercentage = (star, percentage) => {
  expect(star).toHaveAttribute('data-percentage', `${percentage}`)
}

describe('Rating component', () => {
  it('renders five stars', () => {
    const screen = renderRating(0)
    const stars = screen.container.querySelectorAll('span')

    expect(stars.length).toBe(5)
  })

  it('renders empty stars', () => {
    const screen = renderRating(0)
    const stars = screen.container.querySelectorAll('span')

    stars.forEach((star) => testStarPercentage(star, 0))
  })

  it('renders full stars', () => {
    const screen = renderRating(5)
    const stars = screen.container.querySelectorAll('span')

    stars.forEach((star) => testStarPercentage(star, 100))
  })

  it('renders a partial star', () => {
    const screen = renderRating(3.25)
    const stars = screen.container.querySelectorAll('span')

    testStarPercentage(stars[3], 25)
  })
})
