import PropTypes from 'prop-types'

export const pageInfoType = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: PropTypes.string,
  endCursor: PropTypes.string,
})
