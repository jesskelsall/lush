import PropTypes from 'prop-types'
import { pricingType } from './pricing'

export const gridProductType = PropTypes.shape({
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number,
    thumbnail: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    pricing: pricingType,
  }).isRequired,
})

export const gridProductsType = PropTypes.arrayOf(gridProductType)
