import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import Price from './Price'

const buildProps = (currency, amount) => ({
  priceRangeUndiscounted: {
    start: {
      net: { currency, amount },
    },
  },
})

afterEach(cleanup)

const renderPrice = (pricing) => render(<Price pricing={pricing} />)

const currencyTests = [
  ['GBP', '£'],
  ['USD', '$'],
  ['EUR', '€'],
]

describe('Price component', () => {
  it('renders nothing without priceRangeUndiscounted', () => {
    const screen = renderPrice({})

    expect(screen.container.firstChild).toBeNull()
  })

  it('renders nothing without priceRangeUndiscounted.start', () => {
    const screen = renderPrice({ priceRangeUndiscounted: {} })

    expect(screen.container.firstChild).toBeNull()
  })

  it('renders the price with a currency symbol and two digits', () => {
    const screen = renderPrice(buildProps('GBP', 4.3))

    expect(screen.getByText('£ 4.30')).toBeVisible()
  })

  it('renders the currency as-is when the currency is unknown', () => {
    const screen = renderPrice(buildProps('NOK', 5))

    expect(screen.getByText('NOK 5.00')).toBeVisible()
  })

  describe('Currencies', () => {
    // Iterate through each supported currency, performing a test for each
    test.each(currencyTests)('renders %s as %s', (currencyCode, currencySymbol) => {
      const screen = renderPrice(buildProps(currencyCode, 2.5))

      expect(screen.getByText(`${currencySymbol} 2.50`)).toBeVisible()
    })
  })
})
