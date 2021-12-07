import PropTypes from 'prop-types'
import { categoryType } from './category'
import { mediaType } from './media'
import { pricingType } from './pricing'

export const gridProductType = PropTypes.shape({
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: categoryType,
    rating: PropTypes.number,
    thumbnail: mediaType,
    pricing: pricingType,
  }).isRequired,
})

export const gridProductsType = PropTypes.arrayOf(gridProductType)
