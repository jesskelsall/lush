const CURRENCY_SYMBOLS = {
  GBP: '£',
  USD: '$',
  EUR: '€',
}

// Display a price float in a way that's more human readable
export const formatPrice = (pricing) => {
  // Ensure the API response provided something workable
  const hasPrice = pricing.priceRangeUndiscounted && pricing.priceRangeUndiscounted.start
  if (!hasPrice) return null

  const { amount, currency } = pricing.priceRangeUndiscounted.start.net

  // Incredibly basic currency display that makes a lot of assumptions
  // e.g. position of currency symbol, decimal places, decimal mark
  const currencySymbol = CURRENCY_SYMBOLS[currency] || currency
  const displayAmount = amount.toFixed(2)

  return `${currencySymbol} ${displayAmount}`
}
