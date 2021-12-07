import { formatPrice } from './price'

const buildPrice = (currency, amount) => formatPrice({
  priceRangeUndiscounted: {
    start: {
      net: { currency, amount },
    },
  },
})

const currencyTests = [
  ['GBP', '£'],
  ['USD', '$'],
  ['EUR', '€'],
]

describe('formatPrice function', () => {
  it('returns null without priceRangeUndiscounted', () => {
    expect(formatPrice({})).toBeNull()
  })

  it('returns null without priceRangeUndiscounted.start', () => {
    expect(formatPrice({ priceRangeUndiscounted: {} })).toBeNull()
  })

  it('returns the price with a currency symbol and two digits', () => {
    expect(buildPrice('GBP', 4.3)).toBe('£ 4.30')
  })

  it('returns the currency as-is when the currency is unknown', () => {
    expect(buildPrice('NOK', 5)).toBe('NOK 5.00')
  })

  describe('Currencies', () => {
    // Iterate through each supported currency, performing a test for each
    test.each(currencyTests)('returns %s as %s', (currencyCode, currencySymbol) => {
      expect(buildPrice(currencyCode, 2.5)).toBe(`${currencySymbol} 2.50`)
    })
  })
})
