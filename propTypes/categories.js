import PropTypes from 'prop-types'

export const categoriesType = PropTypes.arrayOf(
  PropTypes.shape({
    node: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
)
