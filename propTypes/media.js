import PropTypes from 'prop-types'

export const mediaType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
})
