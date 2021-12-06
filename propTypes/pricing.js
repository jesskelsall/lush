import PropTypes from 'prop-types'

export const pricingType = PropTypes.shape({
  priceRangeUndiscounted: PropTypes.shape({
    start: PropTypes.shape({
      net: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }),
})
